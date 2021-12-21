<script lang="ts">
  import { Config } from '../stores/config';
  import Status, { STATUS } from '../components/Status.svelte';
  import TableSegments from '../components/TableSegments.svelte';
  import Pagination from '../components/Pagination.svelte';
  import { goto } from '$app/navigation';
  import { page as sveltePage } from '$app/stores';
  import { onMount } from 'svelte';
  import VideoInput from '../components/VideoInput.svelte';

  let service = 'youtube';
  let videoID = '';
  let page = 0;
  let isLastPage = false;
  let isFirstPage = true;
  let lastPageNumberIndex = 0;
  let minVotes = -2;
  let maxVotes = Infinity;
  let minViews = 0;
  let maxViews = Infinity;
  let locked = true;
  let hidden = true;
  let ignored = true;
  let requestResponseTimeMs = 0;

  $: lastPageNumberIndex = Math.floor(data.segmentCount / SegmentsPerPage);
  $: isLastPage = page === lastPageNumberIndex;
  $: isFirstPage = page === 0;

  const SegmentsPerPage = 10; // hardcoded on api

  let data = {
    segmentCount: 0,
    page: 0,
    segments: [],
  };

  $: filteredSegments = [...data.segments];

  let status = STATUS.IDLE;

  onMount(async () => {
    if ($sveltePage.query.has('videoID')) {
      videoID = $sveltePage.query.get('videoID');
      await getData();
    }
  });

  async function getData(page = 0) {
    console.log('Sending fetch request');

    status = STATUS.WORKING;
    const postData = new URLSearchParams();
    postData.append('videoID', videoID);
    //postData.category = 'sponsor';
    //postData.categories = 'sponsor';
    //postData.actionType = 'skip';
    //postData.actionTypes = 'sponsor';
    postData.append('service', service);
    postData.append('page', page.toString());
    postData.append('minVotes', minVotes.toString());
    postData.append('maxVotes', maxVotes.toString());
    postData.append('minViews', minViews.toString());
    postData.append('maxViews', maxViews.toString());
    postData.append('locked', locked.toString());
    postData.append('hidden', hidden.toString());
    postData.append('ignored', ignored.toString());
    const requestResponseTimeStartMs = performance.now();
    const result = await fetch(
      `${$Config.sponsorBlockApi}/api/searchSegments?${postData}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    requestResponseTimeMs = performance.now() - requestResponseTimeStartMs;
    if (result.status === 200) {
      status = STATUS.SUCCESS;
      const response = await result.json();
      data.segmentCount = response.segmentCount;
      data.page = response.page;
      data.segments = [...response.segments].map(segment => {
        segment.duration = segment.endTime - segment.startTime;
        segment.videoID = videoID;
        return segment;
      });
    }
    else {
      data.segmentCount = 0;
      data.page = 0;
      data.segments = [];
      if (result.status === 400) {
        status = STATUS.ERROR_INVALID;
      }
      if (result.status === 404) {
        status = STATUS.NOT_FOUND;
      }
    }
  }

  async function onSubmit() {
    goto(`./browse/?videoID=${videoID}`);
  }

  async function paginationHandler(event) {
    const _page = event.detail.page - 1;
    console.log('paginationHandler', _page);
    await getData(_page);
    page = _page;
  }
</script>

<svelte:head>
	<title>Browse | SponsorBlockControl</title>
</svelte:head>

<main>
  <div class="container">

    <form on:submit|preventDefault={onSubmit}>

      <div class="filters">
        <div>
          <label for="videoid">VideoID:</label><br>
          <VideoInput type="text" id="videoid" placeholder="VideoID" bind:value={videoID}/>
        </div>
        <div>
          <label for="service">Service:</label><br>
          <select id="service" name="service" bind:value={service}>
            <option value="youtube">YouTube</option>
          </select>
        </div>
        <div>
          Include:<br>
          <div class="filters">
            <label>
              <input type="checkbox" name="locked" bind:checked={locked}>
              Locked
            </label>
            <label>
              <input type="checkbox" name="hidden" bind:checked={hidden}>
              hidden
            </label>
            <label>
              <input type="checkbox" name="ignored" bind:checked={ignored}>
              ignored
            </label>
          </div>
        </div>
        <div><br>
          <button type="submit" on:click={async () => await getData(0) }>Search</button>
        </div>
      </div>

    </form>

    <div>
      <h2>SegmentCount: {data.segmentCount}</h2>

      <TableSegments
        segments={filteredSegments}
        isLoading={false}
        sortDirection="ASC"
      />

      <div>
        {page + 1} of {Math.ceil(data.segmentCount / SegmentsPerPage)} <br>
        <button disabled={isFirstPage} on:click={() => getData(page = Math.max(0, page - 1))}>prev page</button>
        <button disabled={isLastPage} on:click={() => getData(page = Math.min(Math.floor(data.segmentCount / SegmentsPerPage), page + 1))}>next page</button>
      </div>

      <Pagination current={page + 1} last={lastPageNumberIndex + 1} on:click={paginationHandler} />

      <div>
        <sub>(Loadtime: {Math.round(requestResponseTimeMs)}ms)</sub>
      </div>

    </div>

    <Status {status} />
  </div>
</main>

<style>
  button {
    user-select: none;
  }
  button:disabled {
    pointer-events: none;
    cursor: default;
  }

  .filters {
    display: flex;
    gap: 8px;
  }
</style>
