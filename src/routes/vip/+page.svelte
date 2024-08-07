<script lang="ts">
  import { Config } from '../../stores/config';
  import { isValidUserUUID } from '../../utils';
  import Status, { STATUS } from '../../components/Status.svelte';

  let userUUID = '';
  let userUUIDValid = false;
  let status = STATUS.IDLE;

  $: {
    userUUIDValid = isValidUserUUID(userUUID);
  }

  function addVIP() {
    doAction('add');
  }

  function removeVIP() {
    doAction('remove');
  }

  async function doAction(action = 'add') {
    status = STATUS.WORKING;
    const postData = new URLSearchParams();
    postData.set('adminUserID', $Config.privateUUID);
    postData.set('userID', userUUID);
    postData.set('enabled', (action === 'add').toString());
    const result = await fetch(
      `${$Config.sponsorBlockApi}/api/addUserAsVIP?${postData}`,
      {
        method: 'post',
      }
    ).then(function (response) {
      return response.status;
    });
    if (result === 200) {
      status = STATUS.SUCCESS;
    }
    if (result === 400) {
      status = STATUS.ERROR_INVALID;
    }
    if (result === 403) {
      status = STATUS.ERROR_UNAUTHORIZED;
    }

    if (status === STATUS.WORKING) {
      // Still "working", but request has already finished - this means we've missed an error
      status = STATUS.ERROR_OTHER;
    }
  }
</script>

<svelte:head>
	<title>VIP | SponsorBlockControl</title>
</svelte:head>

<main>
  <div class="container">
    <p class="viprequired">Only admins can do this!</p>
    <fieldset>
      <legend>Add/Remove VIP</legend>
      <div class="form" class:working={status === STATUS.WORKING}>
        <div>
          <label for="uuid">User UUID:</label><br />
          <input
            id="uuid"
            type="text"
            bind:value={userUUID}
            size="64"
            placeholder="Users UUID..." />
        </div>

        <div class="actions">
          <button on:click={removeVIP} disabled={!userUUIDValid}>Remove</button>
          <button on:click={addVIP} disabled={!userUUIDValid}>Add</button>
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
</style>
