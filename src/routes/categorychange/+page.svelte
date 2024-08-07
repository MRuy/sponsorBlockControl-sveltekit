<script lang="ts">
  import { Config } from '../../stores/config';
  import { isValidSegmentUUID } from '../../utils';
  import { categoryList, categoryTitles } from '../../config';
  import Status, { STATUS } from '../../components/Status.svelte';

  let status = STATUS.IDLE;
  let uuid = '';
  let uuidValid = false;
  let selectedCategoryId = '';

  $: {
    uuidValid = isValidSegmentUUID(uuid);
  }

  async function doVote() {
    status = STATUS.WORKING;
    const postData = new URLSearchParams();
    postData.set('UUID', uuid);
    postData.set('userID', $Config.privateUUID);
    postData.set('category', selectedCategoryId);
    const result = await fetch(
      `${$Config.sponsorBlockApi}/api/voteOnSponsorTime?${postData}`,
      {
        method: 'POST',
      }
    ).then((response) => {
      return response.status;
    });
    if (result === 200) {
      status = STATUS.SUCCESS;
      uuid = '';
      selectedCategoryId = '';
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
	<title>Category change | SponsorBlockControl</title>
</svelte:head>

<main>
  <div class="container">
    <fieldset>
      <legend>Change segment category</legend>
      <div>
        <label for="uuid">Segment UUID:</label><br />
        <input
          id="uuid"
          type="text"
          size="64"
          bind:value={uuid}
          pattern="[a-f0-9]{'{64}'}"
          placeholder="Segment UUID ..."
          disabled={status === STATUS.WORKING} />
      </div>
      <div>
        <label for="category">Category:</label><br />
        <select id="category" bind:value={selectedCategoryId}>
          <option value="">--- Select category ---</option>
          {#each categoryList as categoryId, index}
            <option value={categoryId}>{categoryTitles[index]}</option>
          {/each}
        </select>
      </div>
      <div class="actions">
        <button
          on:click={(_) => {
            doVote();
          }}
          disabled={status === STATUS.WORKING || !uuidValid || status === STATUS.WORKING}>Change
          category</button>
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
