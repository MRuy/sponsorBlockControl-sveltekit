<script lang="ts">
  import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Header from '../components/Header.svelte';
  import Navigation from '../components/Navigation.svelte';
  import PageLoader from '../components/PageLoader.svelte';
  import navigationState from '../stores/navigationState';
  import { base as baseUrl } from '$app/paths';

  const navigationItems = [
    {
      route: `${baseUrl}/`,
      title: 'Home',
      uuidRequired: false,
    },
    {
      route: `${baseUrl}/settings`,
      title: 'Settings',
    },
    {
      route: `${baseUrl}/username`,
      title: 'Username',
      uuidRequired: true,
    },
    {
      route: `${baseUrl}/stats`,
      title: 'Stats',
      uuidRequired: false,
    },
    {
      route: `${baseUrl}/voteonsegment`,
      title: 'Vote on segment',
      uuidRequired: true,
    },
    {
      route: `${baseUrl}/categorychange`,
      title: 'Category change',
      uuidRequired: true,
    },
    {
      route: `${baseUrl}/lockcategories`,
      title: 'Lock categories',
      uuidRequired: true,
      requiresVIP: true,
    },
    {
      route: `${baseUrl}/shadowban`,
      title: 'Add/Remove Shadow ban',
      uuidRequired: true,
      requiresVIP: true,
    },
    {
      route: `${baseUrl}/warnuser`,
      title: 'Warn user',
      uuidRequired: true,
      requiresVIP: true,
    },
    {
      route: `${baseUrl}/batchwarn`,
      title: 'Batch warn',
      uuidRequired: true,
      requiresVIP: true,
    },
    {
      route: `${baseUrl}/cachepurge`,
      title: 'Clear cache / Purge segments',
      uuidRequired: true,
      requiresVIP: true,
    },
    {
      route: `${baseUrl}/vip`,
      title: 'Add/Remove VIP',
      uuidRequired: true,
      requiresVIP: true,
    },
    {
      route: `${baseUrl}/userinfo`,
      title: 'User Info',
      uuidRequired: false,
    },
    {
      route: `${baseUrl}/browse`,
      title: 'Browse',
      uuidRequired: false,
    },
  ];

  function navigationClickHandler(item) {
    goto(item.route);
  }
</script>

<svelte:window
  on:sveltekit:navigation-start={() => {
    $navigationState = 'loading';
  }}
  on:sveltekit:navigation-end={() => {
    $navigationState = 'loaded';
  }}
/>

<div>

  <Header />
  <Navigation items={navigationItems} currentRoute={$page.url.pathname} />
  
  <slot />
  
  {#if $navigationState === 'loading'}
  <div out:fade={{ delay: 300 }}>
    <PageLoader />
  </div>
  {/if}
</div>


<style global>
  @import '../style.css';
</style>
