<script lang="ts">
  import { Config } from '../../stores/config';
  import { categoryList, categoryTitles, actionTypeList, actionTypeTitles } from '../../config';
  import { page } from '$app/stores';
  import Status, { STATUS } from '../../components/Status.svelte';
  import VideoInput from '../../components/VideoInput.svelte';
  import { onMount } from 'svelte';

  let categories = [];
  let videoID = '';
  let status = STATUS.IDLE;
  let reason = '';
  let lockReasonState = {};
  let actionTypes = [...actionTypeList];

  const defaultChecked = [...categoryList.filter((e) => !['poi_highlight', 'filler', 'exclusive_access', 'chapter'].includes(e))];

  onMount(() => {
    videoID = $page.url.searchParams.has('videoID') ? $page.url.searchParams.get('videoID') : '';
  });

  $: {
    // force calling the function if videoID changes
    videoID && updateLockReasonFromServer();
  }

  const lockReasonSuggestions = [
    'There are already several well-timed Sponsor submissions.',
    'Unique skits should not be skipped.',
    'Preview is not for spoken summaries.',
  ];

  // onMount(async () => {
  //   if (videoID !== '') {
  //     await updateLockReasonFromServer();
  //   }
  // });

  async function doAction(lock = true) {
    lockReasonState = {};
    status = STATUS.WORKING;
    const postData: TLockCategories = {
      videoID: videoID,
      userID: $Config.privateUUID,
      reason: reason,
      categories: categories,
      actionTypes: actionTypes,
    };
    const result = await fetch(
      `${$Config.sponsorBlockApi}/api/lockCategories`,
      {
        method: lock ? 'post' : 'delete',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      }
    ).then(function (response) {
      return response.status;
    });
    if (result === 200) {
      status = STATUS.SUCCESS;
      videoID = '';
      reason = '';
      categories = [];
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

  function toggleCheckboxes() {
    if (categories.length === 0) {
      categories = [...defaultChecked];
    } else {
      categories = [];
    }
  }

  async function updateLockReasonFromServer() {
    const response = await fetch(`${$Config.sponsorBlockApi}/api/lockReason?videoID=${videoID}`);
    const data = await response.json();
    const _lockReasonState = {};
    for (const item of data) {
      _lockReasonState[item.category] = item;
    }
    lockReasonState = _lockReasonState;
  }
</script>

<svelte:head>
	<title>Lock categories | SponsorBlockControl</title>
</svelte:head>

<main>
  <div class="container">
    <fieldset>
      <legend>Lock categories</legend>
      <div class="form" class:working={status === STATUS.WORKING}>
        <div>
          <label for="videoid">VideoID:</label><br />
          <VideoInput
            id="videoid"
            bind:value={videoID}
          />
        </div>
        <div>
          <div>Categories:</div>
          {#each categoryList as categoryId, index}
            <div class="category-option">
              <span
                class="lock">
                {#if lockReasonState[categoryId]}
                  {lockReasonState[categoryId].locked === 1 ? '🔒' : '✓'}
                {/if}
              </span>
              <input
                id={'category_' + categoryId}
                type="checkbox"
                bind:group={categories}
                value={categoryId} />
              <label
                for={'category_' + categoryId}>{categoryTitles[index]}</label>
            </div>
          {/each}
          <div>Action Types:</div>
          {#each actionTypeList as actionTypeId, index}
            <div class="actionType-option">
              <input
                id={'actionType_' + actionTypeId}
                type="checkbox"
                bind:group={actionTypes}
                value={actionTypeId} />
              <label
                for={'actionType_' + actionTypeId}>{actionTypeTitles[index]}</label>
            </div>
          {/each}
        </div>
        <div>
          <label for="reason">Lock Reason:</label><br />
          <textarea
            id="reason"
            cols="80"
            rows="3"
            bind:value={reason}
            placeholder="Reason..."
            list="lockreasonsuggestions"
          ></textarea>
          <datalist id="lockreasonsuggestions">
            {#each lockReasonSuggestions as suggestion}
              <option value={suggestion}></option>
            {/each}
          </datalist>
        </div>

        <div class="actions">
          <button on:click={toggleCheckboxes}>Check all</button>
          <button
            on:click={_ => doAction(false)}
            disabled={videoID.length === 0 || categories.length === 0 || status === STATUS.WORKING}>Unlock</button>
          <button
            on:click={_ => doAction(true)}
            disabled={videoID.length === 0 || categories.length === 0 || status === STATUS.WORKING}>Lock</button>
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
  .category-option {
    margin-left: 16px;
  }

  .lock {
    display: inline-block;
    width: 1em;
    height: 1em;
    cursor: default;
    pointer-events: none;
    text-align: center;
  }
</style>
