<svelte:head>
	<title>SponsorBlockControl</title>
</svelte:head>

<script lang="ts">
  import { Config } from '../stores/config';
  import GetUserInfo from '../components/GetUserInfo.svelte';
  import SegmentTime from '../components/SegmentTime.svelte';
</script>

<main>
  <div class="container">
    <p style="width:100%">
      <GetUserInfo privateUUID={$Config.privateUUID} />
    </p>
  </div>
</main>
