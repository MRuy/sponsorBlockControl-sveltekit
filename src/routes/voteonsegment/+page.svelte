<script lang="ts">
  import { Config } from '../../stores/config';
  import { isValidSegmentUUID } from '../../utils';
  import Status, { STATUS } from '../../components/Status.svelte';

  let status = STATUS.IDLE;
  let uuid = '';
  let uuidValid = false;

  $: {
    uuidValid = isValidSegmentUUID(uuid);
  }

  async function doVote(segmentUUID, voteType = 0) {
    status = STATUS.WORKING;
    const postData = new URLSearchParams();
    postData.set('UUID', segmentUUID);
    postData.set('userID', $Config.privateUUID);
    postData.set('type', voteType.toString());
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
	<title>Vote on segment | SponsorBlockControl</title>
</svelte:head>

<main>
  <div class="container">
    <fieldset>
      <legend>Vote on segment</legend>
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
      <div class="actions">
        <button
          on:click={(_) => {
            doVote(uuid, 20);
          }}
          disabled={status === STATUS.WORKING || !uuidValid || status === STATUS.WORKING}>Undo Vote</button>
        <button
          on:click={(_) => {
            doVote(uuid, 0);
          }}
          disabled={status === STATUS.WORKING || !uuidValid || status === STATUS.WORKING}>Downvote</button>
        <button
          on:click={(_) => {
            doVote(uuid, 1);
          }}
          disabled={status === STATUS.WORKING || !uuidValid || status === STATUS.WORKING}>Upvote</button>
      </div>
    </fieldset>

    <Status {status} />
  </div>
</main>

<style>
</style>
