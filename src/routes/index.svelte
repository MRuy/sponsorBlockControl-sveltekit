<svelte:head>
	<title>SponsorBlockControl</title>
</svelte:head>

<script lang="ts">
  import { ConfigStore } from '../stores';
  import GetUserInfo from '../components/GetUserInfo.svelte';
</script>

<main>
  <div class="container">
    <p style="width:100%">
      <GetUserInfo privateUUID={$ConfigStore.privateUUID} />
    </p>
  </div>
</main>
