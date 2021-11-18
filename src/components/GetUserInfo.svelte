<script lang="ts">
  import { onMount } from 'svelte';
  import { UserInfoStore} from '../stores';
  import { STATUS } from '../components/Status.svelte';
  import { minutesReadable, updateUserInfo } from '../utils';

  const rtf = new Intl.RelativeTimeFormat('en-US');

  export let privateUUID = '';
  let status = STATUS.IDLE;

  async function doAction() {
    if (privateUUID === '') {
      status = STATUS.PRIVATEUUID_MISSING;
      return;
    }
    status = STATUS.WORKING;
    await updateUserInfo();
    status = STATUS.SUCCESS;
  }

  onMount(doAction);
</script>

<span>
  {#if status == STATUS.SUCCESS}
    Hello {#if $UserInfoStore.vip === true}[VIP]{/if} {$UserInfoStore.userName}<br>
    You have saved people from {$UserInfoStore.viewCount.toLocaleString()} segments.<br>
    You have saved people {minutesReadable($UserInfoStore.minutesSaved, true)} of their lives.<br>
    You submitted {$UserInfoStore.segmentCount.toLocaleString()} segments!<br>
    There is currently <b class:hasWarnings={$UserInfoStore.warnings > 0}>{$UserInfoStore.warnings}</b> warnings for your UserID ({$UserInfoStore.userID})<br>
    <sub>Last update: {rtf.format(-Math.round((Date.now() - $UserInfoStore._lastUpdateTime) / 60000), 'minute')}</sub>
  {/if}
  {#if status == STATUS.WORKING}Loading...{/if}
  {#if status == STATUS.PRIVATEUUID_MISSING}(Private UUID required){/if}
</span>

<style>
.hasWarnings {
  color: #f60c02;
}
</style>
