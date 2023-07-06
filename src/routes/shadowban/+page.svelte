<script lang="ts">
  import { categoryList, categoryTitles, deArrowTypeList, deArrowTypeTitles } from '../../config';
  import { Config } from '../../stores/config';
  import { isValidUserUUID } from '../../utils';
  import Status, { STATUS } from '../../components/Status.svelte';

  let userUUID = '';
  let lookForIPs = false;
  let hideOldSubmissions = true;
  let categories = [...categoryList];
  let deArrowTypes = [...deArrowTypeList];
  let userUUIDValid = false;
  let status = STATUS.IDLE;

  $: {
    userUUIDValid = isValidUserUUID(userUUID);
  }

  async function doAction(action = 'ban') {
    status = STATUS.WORKING;
    const postData = new URLSearchParams();
    postData.set('adminUserID', $Config.privateUUID);
    postData.set('userID', userUUID);
    postData.set('enabled', (action === 'ban').toString());
    postData.set('lookForIPs', lookForIPs.toString());
    postData.set('unHideOldSubmissions', hideOldSubmissions.toString());
    postData.set('categories', JSON.stringify(categories));
    postData.set('deArrowTypes', JSON.stringify(deArrowTypes));
    const result = await fetch(
      `${$Config.sponsorBlockApi}/api/shadowBanUser?${postData}`,
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
  }
</script>

<svelte:head>
	<title>Shadowban | SponsorBlockControl</title>
</svelte:head>

<main>
  <div class="container">
    <fieldset>
      <legend>Shadow ban user:</legend>
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

        <div>
          <input
            id="lookforips"
            type="checkbox"
            bind:checked={lookForIPs} />
          <label for="lookforips">Look for IPs</label>
        </div>

        <div>
          <input
            id="hideoldsubmissions"
            type="checkbox"
            bind:checked={hideOldSubmissions} />
          <label for="hideoldsubmissions">Hide/Restore old submissions</label>
        </div>

        <div
          class="hide-option-container"
          hidden={!hideOldSubmissions}
        >
          <div>Categories to hide:</div>
          {#each categoryList as categoryId, index}
            <div class="to-hide-option">
              <input
                id={'category_' + categoryId}
                type="checkbox"
                bind:group={categories}
                value={categoryId} />
              <label
                for={'category_' + categoryId}>{categoryTitles[index]}</label>
            </div>
          {/each}
        </div>

        <div
          class="hide-option-container"
          hidden={!hideOldSubmissions}
        >
          <div>DeArrow submissions to hide:</div>
          {#each deArrowTypeList as deArrowType, index}
            <div class="to-hide-option">
              <input
                id={'dearrow_type_' + deArrowType}
                type="checkbox"
                bind:group={deArrowTypes}
                value={deArrowType} />
              <label
                for={'dearrow_type_' + deArrowType}>{deArrowTypeTitles[index]}</label>
            </div>
          {/each}
        </div>

        <div class="actions">
          <button
            type="button"
            disabled={!userUUIDValid}
            on:click={(_) => {
              doAction('unban');
            }}>Unban</button>
          <button
            type="button"
            disabled={!userUUIDValid}
            on:click={(_) => {
              doAction('ban');
            }}>Ban</button>
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
  .hide-option-container {
    margin-left: 16px;
  }
  .to-hide-option {
    margin-left: 16px;
  }
</style>
