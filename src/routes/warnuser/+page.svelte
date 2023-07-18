<script lang="ts">
  import { Config } from '../../stores/config';
  import { isValidUserUUID } from '../../utils';
  import Status, { STATUS } from '../../components/Status.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
	import { warningTypeList, warningTypeTitles } from '../../config';

  let userUUID = '';
  let userUUIDValid = false;
  let reason = '';
  let type = 0;
  let status = STATUS.IDLE;

  onMount(() => {
    userUUID = $page.url.searchParams.has('userID') ? $page.url.searchParams.get('userID') : '';
    userUUIDValid = isValidUserUUID(userUUID);
  });

  async function doAction(action = 'warn') {
    status = STATUS.WORKING;
    const postData: TWarnUser = {
      issuerUserID: $Config.privateUUID,
      userID: userUUID,
      reason: reason,
      type: type,
      enabled: action === 'warn',
    };
    const result = await fetch(`${$Config.sponsorBlockApi}/api/warnUser`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }).then(function (response) {
      return response.status;
    });
    if (result === 200) {
      status = STATUS.SUCCESS;
      userUUID = '';
      userUUIDValid = false;
      reason = '';
    }
    if (result === 400) {
      status = STATUS.ERROR_INVALID;
    }
    if (result === 403) {
      status = STATUS.ERROR_UNAUTHORIZED;
    }
    if (result === 409) {
      status = STATUS.DUPLICATE;
    }
  }
</script>

<svelte:head>
	<title>Warn user | SponsorBlockControl</title>
</svelte:head>

<main>
  <div class="container">
    <fieldset>
      <legend>Warn user:</legend>
      <div class="form" class:working={status === STATUS.WORKING}>
        <div>
          <label for="uuid">User UUID:</label><br />
          <input
            id="uuid"
            type="text"
            bind:value={userUUID}
            size="64"
            on:input={(_) => {
              userUUIDValid = isValidUserUUID(userUUID);
            }}
            placeholder="User UUID..." />
        </div>
        <div>
          <label for="reason">Warn Reason:</label><br />
          <textarea
            id="reason"
            cols="80"
            rows="3"
            bind:value={reason}
            placeholder="Reason..."></textarea>
        </div>

        <select id="warning-type" bind:value={type}>
          <option value="">--- Where it applies ---</option>
          {#each warningTypeList as warningType, index}
            <option value={warningType}>{warningTypeTitles[index]}</option>
          {/each}
        </select>

        <div class="actions">
          <button
            type="button"
            disabled={!userUUIDValid}
            on:click={(_) => {
              doAction('unwarn');
            }}>Unwarn</button>
          <button
            type="button"
            disabled={!userUUIDValid}
            on:click={(_) => {
              doAction('warn');
            }}>Warn</button>
        </div>
      </div>
    </fieldset>

    <Status {status} />
  </div>
</main>

<style>
  .form {
    position: relative;
  }
  .working:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.3);
  }

  select {
    color: #dee2e6;
    border: 1px solid #6c757d;
    border-radius: .25rem;
    background-color: #000;
    padding: .175rem .5rem;
  }
</style>