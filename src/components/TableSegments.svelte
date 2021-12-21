<script lang="ts">
  export let segments = [];
  export let isLoading = false;
  export let sortDirection = 'DESC';
  export let sortBy = 'timeSubmitted';
  import SegmentTime from './SegmentTime.svelte';
  import Copy from './CopyToClipboard.svelte';
  import TableSortHeader from './TableSortHeader.svelte';
  import { categoryColors } from '../stores/categoryColors';

  let _segments: Segment[];
  $: _segments = [...segments];

  const SORT_ASC = 'ASC';
  const SORT_DESC = 'DESC';

  const ACTIONTYPE_ICON = {
    skip: '⏭️',
    mute: '🔇',
  };

  let currentSortBy = sortBy;
  sortDirection = sortDirection === 'DESC' ? SORT_DESC : SORT_ASC;

  function getCategoryColor(id) {
    return $categoryColors.find(item => item.id === id)?.color || 'transparent';
  }

  function humanReadableTime(ms) {
    const date = new Date(ms);
    return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')} ${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')}`;
  }

  function changeSortBy(target) {
    const sortBy = target.getAttribute('sortBy');
    target.addEventListener('click', event => {
      if (currentSortBy === sortBy) {
        sortDirection = sortDirection === SORT_DESC ? SORT_ASC : SORT_DESC;
      }
      else {
        sortDirection = SORT_DESC;
        currentSortBy = sortBy;
      }
      _segments = [...segments].sort((a, b) => {
        return a[sortBy] === b[sortBy] ? 0 : a[sortBy] > b[sortBy] ? -1 : 1;
      });
      if (sortDirection === SORT_ASC) {
        _segments = [..._segments].reverse();
      }
    });
  }
</script>

<table>
  <thead>
    <tr>
      <th class="cell-text" use:changeSortBy data-sortBy="timeSubmitted">
        <TableSortHeader sortBy="timeSubmitted" name="timeSubmitted" sorting={sortDirection} current={currentSortBy}>Submitted</TableSortHeader>
      </th>
      <!--
      <th class="cell-text">
        Video ID
      </th>
      -->
      <th class="cell-number" use:changeSortBy data-sortBy="startTime">
        <TableSortHeader name="startTime" sorting={sortDirection} current={currentSortBy}>Start/End</TableSortHeader>
      </th>
      <th class="cell-number">
      Length
      </th>
      <th class="cell-number" use:changeSortBy data-sortBy="votes">
        <TableSortHeader name="votes" sorting={sortDirection} current={currentSortBy}>Votes</TableSortHeader>
      </th>
      <th class="cell-number" use:changeSortBy data-sortBy="views">
        <TableSortHeader name="views" sorting={sortDirection} current={currentSortBy}>Views</TableSortHeader>
      </th>
      <th class="cell-text" use:changeSortBy data-sortBy="category">
        <TableSortHeader name="category" sorting={sortDirection} current={currentSortBy}>Category</TableSortHeader>
      </th>
      <th class="cell-number" use:changeSortBy data-sortBy="hidden">
        <TableSortHeader name="hidden" sorting={sortDirection} current={currentSortBy}>Hidden</TableSortHeader>
      </th>
      <th class="cell-text" use:changeSortBy data-sortBy="actiontype">
        <TableSortHeader name="hidden" sorting={sortDirection} current={currentSortBy}>Actiontype</TableSortHeader>
      </th>
      <th class="cell-number" use:changeSortBy data-sortBy="shadowHidden">
        <TableSortHeader name="shadowHidden" sorting={sortDirection} current={currentSortBy}>ShadowHidden</TableSortHeader>
      </th>
      <th class="cell-number" use:changeSortBy data-sortBy="locked">
        <TableSortHeader name="locked" sorting={sortDirection} current={currentSortBy}>Locked</TableSortHeader>
      </th>
      <th class="cell-text">UUID</th>
      <th class="cell-text">Submitter UUID</th>
    </tr>
  </thead>
  <tbody>
    {#if isLoading}
      <tr>
        <td colspan="12">
          <div class="loading">Loading data...</div>
        </td>
      </tr>
    {:else}
      {#each _segments as segment}
      <tr>
        <td class="cell-text">{humanReadableTime(segment.timeSubmitted)}</td>
        <!--
          <td class="cell-text">
            <span class="nowrap">{segment.videoID}</span>
            <Copy value={segment.videoID} />
            <a href={`https://www.youtube.com/watch?v=${segment.videoID}`} target="_blank">YT</a>
          </td>
        -->
        <td class="cell-number">
          <a href={`https://www.youtube.com/watch?v=${segment.videoID}${segment.startTime>2?`&t=${Math.floor(Math.max(0,segment.startTime-2))}s`:''}#requiredSegment=${segment.UUID}`}>
            <SegmentTime value={segment.startTime} /><br><SegmentTime value={segment.endTime} />
          </a>
        </td>
        <td class="cell-number"><SegmentTime value={segment.endTime - segment.startTime} /></td>
        <td class="cell-number nowrap">
          {#if segment.votes < -1}
            <span class="removed" title="Segment removed">❌</span>
          {/if}
          {segment.votes}
        </td>
        <td class="cell-number">{segment.views}</td>
        <td class="cell-text">
          <span
            class="category"
            style={`background-color:${getCategoryColor(segment.category)}`}
          >
            {segment.category}
          </span>
        </td>
        <td class="cell-text">{segment.hidden || '—'}</td>
        <td class="cell-text">{segment.actionType in ACTIONTYPE_ICON ? ACTIONTYPE_ICON[segment.actionType] : segment.actionType}</td>
        <td class="cell-text">{segment.shadowHidden || '—'}</td>
        <td class="cell-text">
          {#if segment.locked}
            <span class="locked" title="Locked by VIP/Moderator">🔒</span>
          {:else}
            —
          {/if}
        </td>
        <td class="cell-text">
          <span class="wordbreak wordbreak--uuid">{segment.UUID}</span><br />
          <Copy value={segment.UUID} />
        </td>
        <td class="cell-text">
          <span class="wordbreak wordbreak--uuid">{segment.userID}</span><br />
          <Copy value={segment.userID} />
        </td>
      </tr>
      {/each}
    {/if}
  </tbody>
</table>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
table a {
  color: inherit;
  text-decoration: inherit;
}
table th {
  padding: 6px 8px;
  border-bottom: 2px solid var(--border-color);
}
table tbody td {
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #343a40;
}
table tr:nth-child(odd) td {
  background: var(--table-row-odd-color);
}

thead th {
  position: sticky;
  top: 0;
  background: var(--bg-color);
  z-index: 1;
}
thead th:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom: 2px solid var(--border-color);
}
.locked {
  cursor: help;
}
.removed {
  cursor: help;
}
.nowrap {
  word-break: keep-all;
  white-space: nowrap;
}

.cell-text {
  text-align: left;
}
.cell-number {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
.wordbreak {
  word-break: break-word;
}
.wordbreak--uuid {
  -webkit-line-clamp: 3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  min-width: 100px;
  max-width: 300px;
}

.category {
  padding: 4px 6px;
  color: #000;
  display: inline-block;
  width: 100%;
  border-radius: 4px;
}

.loading {
  position: relative;
  display: flex;
  min-height: 200px;
  width: 200px;
  margin: auto;
  align-content: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.loading:before {
  content: '';
  position: absolute;
  top: calc(50% + 20px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 8px;
  background: var(--bg-color);
}
.loading:after {
  content: '';
  position: absolute;
  top: calc(50% + 20px);
  left: 0;
  transform: translateY(-50%);
  width: 10px;
  height: 8px;
  background: var(--border-color);
  animation-name: loading;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes loading {
  60% {
    width: 90%;
  }
  64% {
    width: 94%;
  }
  70% {
    width: 98%;
  }
  80% {
    width: 98.75%;
  }
  90% {
    width: 99.2%;
  }
  95% {
    width: 99.4%;
  }
  100% {
    width: 99.4%;
  }
}
</style>
