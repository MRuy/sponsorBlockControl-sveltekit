<script lang="ts">
  import { onMount } from 'svelte';
  import { Config } from '../../stores/config';
  import { serverConfigKeyList } from '../../config';
  import Status, { STATUS } from '../../components/Status.svelte';

  let status = STATUS.IDLE;
  let selectedKey = serverConfigKeyList[0];
  let value = '';
  let currentValue = '';

  async function refresh() {
    status = STATUS.WORKING;
    await fetch(
      `${$Config.sponsorBlockApi}/api/config?userID=${$Config.privateUUID}&key=${selectedKey}`
    ).then((response) => {
      return response.json();
    }).then((data) => {
      currentValue = data.value;
      status = STATUS.SUCCESS;
    }).catch(() => {
      status = STATUS.ERROR_OTHER;
    });
  }

  onMount(async () => {
    await refresh();
  });

  async function doVote() {
    status = STATUS.WORKING;
    const result = await fetch(
      `${$Config.sponsorBlockApi}/api/config`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          value: value,
          userID: $Config.privateUUID,
          key: selectedKey,
        }),
      }
    ).then((response) => {
      return response.status;
    });
    if (result === 200) {
      status = STATUS.SUCCESS;
      currentValue = value;
      value = '';
    }
    if (result === 400) {
      status = STATUS.ERROR_INVALID;
    }
    if (result === 405) {
      status = STATUS.DUPLICATE;
    }

    if (status === STATUS.WORKING) {
      // Still "working", but request has already finished - this means we've missed an error
      status = STATUS.ERROR_OTHER;
    }
  }
</script>

<svelte:head>
	<title>Set config | SponsorBlockControl</title>
</svelte:head>

<main>
  <div class="container">
    <fieldset>
      <legend>Set server config</legend>
      <div>
        <label for="keys">Key:</label><br />
        <select 
          id="keys"
          on:change={() => {
            setTimeout(() => refresh());
          }}
          bind:value={selectedKey}>
          {#each serverConfigKeyList as key, index}
            <option value={key}>{key}</option>
          {/each}
        </select>
      </div>
      <div class="actions">
        <button
          on:click={(_) => {
            doVote();
          }}
          disabled={status === STATUS.WORKING}>Set config</button>
      </div>
      <div>
        <label for="value">New value:</label><br />
        <input
          id="value"
          type="text"
          size="64"
          bind:value={value}
          placeholder="Value ..."
          disabled={status === STATUS.WORKING} />
      </div>

      <div>
        <label for="uuid">Current value:</label><br />
        <input
          id="value"
          type="text"
          size="64"
          bind:value={currentValue}
          disabled={true} />
      </div>
    </fieldset>

    <Status {status} />
  </div>
</main>

<style>
  select {
    color: #dee2e6;
    border: 1px solid #6c757d;
    border-radius: .25rem;
    background-color: #000;
    padding: .175rem .5rem;
  }
</style>
