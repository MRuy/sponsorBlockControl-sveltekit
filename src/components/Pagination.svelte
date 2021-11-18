<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let current = 1;
  export let last = 1;

  let isLastPage = false;
  let isFirstPage = true;

  $: isLastPage = current === last;
  $: isFirstPage = current === 1;
  

  const dispatch = createEventDispatcher();

  function pageClick(page) {
    dispatch('click', {page});
  }
</script>

{#each Array(last) as page, index}
  <button disabled={current === index + 1} on:click={() => pageClick(index + 1)}>{index + 1}</button>
{/each}
