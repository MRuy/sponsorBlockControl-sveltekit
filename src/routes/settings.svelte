<script lang="ts">
  import { Config } from '../stores/config';
  import { UserInfo } from '../stores/userInfo';
  import { updateUserInfo } from '../utils';

  let privateUUID = $Config.privateUUID;
  let privateUUIDGotSaved = false;

  let sponsorBlockApi = $Config.sponsorBlockApi;
  let sponsorBlockApiGotSaved = false;

  function saveSponsorBlockApi(event) {
    $Config.sponsorBlockApi = sponsorBlockApi;
    sponsorBlockApiGotSaved = true;
    setTimeout((_) => {
      sponsorBlockApiGotSaved = false;
    }, 3000);
  }

  async function savePrivateUUID(event) {
    if ($Config.privateUUID != privateUUID) {
      // reset the cache store
      $UserInfo = null;
    }
    $Config.privateUUID = privateUUID;
    privateUUIDGotSaved = true;
    await updateUserInfo(true);
    setTimeout((_) => {
      privateUUIDGotSaved = false;
    }, 3000);
  }

</script>

<svelte:head>
	<title>Lock categories | SponsorBlockControl</title>
</svelte:head>

<fieldset>
  <legend>Private userID:</legend>
  <div class="info">
    <p>
      Your private userID will only be stored in your Browser and only
      send to the SponsorBlock API.
    </p>
  </div>
  <div>
    <label for="privateUUID">Your private userID:</label><br />
    <input
      id="privateUUID"
      type="text"
      bind:value={privateUUID}
      size="36"
      pattern="^[A-Za-z0-9]{36}$"
      spellcheck="false"
      placeholder="Private UUID" />
    <div class="actions">
      <button
        on:click={savePrivateUUID}>{privateUUIDGotSaved ? 'Saved!' : 'Save'}</button>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend>API Server:</legend>
  <div>
    <label for="serveraddr">SponsorBlock Server:</label><br />
    <input
      type="url"
      id="serveraddr"
      class="serveraddr"
      bind:value={sponsorBlockApi}
      placeholder="https://..." />
    <div class="actions">
      <button
        on:click={saveSponsorBlockApi}>{sponsorBlockApiGotSaved ? 'Saved!' : 'Save'}</button>
    </div>
  </div>
</fieldset>

<style>
  .serveraddr {
    width: 100%;
  }
  fieldset {
    margin: 8px 0;
  }

  #privateUUID {
    width: 100%;
  }
</style>

