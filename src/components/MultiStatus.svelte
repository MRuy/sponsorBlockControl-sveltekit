<script lang="ts" context="module">
  export {STATUS} from "./BaseStatus.svelte";
</script>

<script lang="ts">
  import BaseStatus, {STATUS} from "./BaseStatus.svelte";
  export let status: [string, symbol][] = [];
  
</script>

<div class="status">
  Status: 
  {#if Object.values(status).length == 0}
    <BaseStatus status={STATUS.IDLE} />
  {:else}
    <ul>
      {#each status as [name, substatus] }
        <li>{name}: <BaseStatus status={substatus} /></li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  ul {
    margin: 0;
  }
</style>
