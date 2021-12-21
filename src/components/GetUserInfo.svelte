<script lang="ts">
  import { onMount } from 'svelte';
  import { UserInfo } from '../stores/userInfo';
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
    Hello {#if $UserInfo.vip === true}[VIP]{/if} {$UserInfo.userName}<br>
    You have saved people from {$UserInfo.viewCount.toLocaleString()} segments.<br>
    You have saved people {minutesReadable($UserInfo.minutesSaved, true)} of their lives.<br>
    You submitted {$UserInfo.segmentCount.toLocaleString()} segments!<br>
    There is currently <b class:hasWarnings={$UserInfo.warnings > 0}>{$UserInfo.warnings}</b> warnings for your UserID ({$UserInfo.userID})<br>
    <sub>Last update: {rtf.format(-Math.round((Date.now() - $UserInfo._lastUpdateTime) / 60000), 'minute')}</sub>
  {/if}
  {#if status == STATUS.WORKING}Loading...{/if}
  {#if status == STATUS.PRIVATEUUID_MISSING}(Private UUID required){/if}
</span>

<style>
.hasWarnings {
  color: #f60c02;
}
</style>
