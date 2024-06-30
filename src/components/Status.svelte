<script lang="ts" context="module">
  export {STATUS} from "./BaseStatus.svelte";
</script>

<script lang="ts">
  import BaseStatus from "./BaseStatus.svelte";
  export let status;
</script>

<div class="status">
  Status: <BaseStatus {status} />
</div>
