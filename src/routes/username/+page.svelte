<script lang="ts">
  import { Config } from '../../stores/config';
  import { UserInfo } from '../../stores/userInfo';
  import { isValidUserUUID, updateUserInfo } from '../../utils';
  import Status, { STATUS } from '../../components/Status.svelte';

  let userName = $UserInfo.userName;
  let targetUsername = '';
  let targetUUID = '';
  let targetUUIDValid = false;
  let status = STATUS.IDLE;

  async function getUsername() {
    status = STATUS.WORKING;
    const response = await fetch(
      `${$Config.sponsorBlockApi}/api/getUsername?userID=${$Config.privateUUID}`
    );
    if (response.status === 200) {
      const resp = await response.json();
      status = STATUS.SUCCESS;
      return resp.userName;
    }
    if (response.status === 400) {
      status = STATUS.ERROR_INVALID;
    }
    if (response.status === 403) {
      status = STATUS.ERROR_UNAUTHORIZED;
    }

    if (status === STATUS.WORKING) {
      // Still "working", but request has already finished - this means we've missed an error
      status = STATUS.ERROR_OTHER;
    }
    return '';
  }

  async function setUsername(userID, userName, adminUserID = undefined) {
    status = STATUS.WORKING;
    const postData = new URLSearchParams();
    postData.set('userID', userID);
    postData.set('username', userName);
    if (adminUserID) {
      postData.set('adminUserID', adminUserID);
    }
    const response = await fetch(
      `${$Config.sponsorBlockApi}/api/setUsername?${postData}`,
      {
        method: 'POST',
      }
    );
    if (response.status === 200) {
      status = STATUS.SUCCESS;
      await updateUserInfo();
    }
    if (response.status === 400) {
      status = STATUS.ERROR_INVALID;
    }
    if (response.status === 403) {
      status = STATUS.ERROR_UNAUTHORIZED;
    }

    if (status === STATUS.WORKING) {
      // Still "working", but request has already finished - this means we've missed an error
      status = STATUS.ERROR_OTHER;
    }
  }

  async function loadUsername() {
    userName = await getUsername();
    $UserInfo.userName = userName;
    $UserInfo._lastUpdateTime = Date.now();
  }
</script>

<svelte:head>
	<title>Username | SponsorBlockControl</title>
</svelte:head>

<main>
  <div class="container">
    <div class="form" class:working={status === STATUS.WORKING}>
      <fieldset>
        <legend>Your Username:</legend>
        <input type="text" bind:value={userName} placeholder="Username..." />
        <button
          on:click={async (_) => {
            await setUsername($Config.privateUUID, userName);
            await loadUsername();
          }}
          disabled={userName.length == 0}>Change</button>
      </fieldset>

      <fieldset>
        <legend>
          Change Username: <span class="viprequired">(Admin Only)</span>
        </legend>
        <input
          type="text"
          bind:value={targetUUID}
          on:input={(_) => {
            targetUUIDValid = isValidUserUUID(targetUUID);
          }}
          placeholder="Target UUID..." />
        <input
          type="text"
          bind:value={targetUsername}
          placeholder="Username..." />
        <button
          on:click={(_) => {
            setUsername(targetUUID, targetUsername, $Config.privateUUID);
          }}
          disabled={!targetUUIDValid || targetUsername.length === 0}>Update</button>
      </fieldset>
    </div>

    <Status {status} />
  </div>
</main>

<style>
  .form {
    display: flex;
    gap: 16px;
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
