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
      route: `./`,
      title: 'Home',
      uuidRequired: false,
    },
    {
      route: `./settings`,
      title: 'Settings',
    },
    {
      route: `./username`,
      title: 'Username',
      uuidRequired: true,
    },
    {
      route: `./stats`,
      title: 'Stats',
      uuidRequired: false,
    },
    {
      route: `./voteonsegment`,
      title: 'Vote on segment',
      uuidRequired: true,
    },
    {
      route: `./categorychange`,
      title: 'Category change',
      uuidRequired: true,
    },
    {
      route: `./lockcategories`,
      title: 'Lock categories',
      uuidRequired: true,
      requiresVIP: true,
    },
    {
      route: `./shadowban`,
      title: 'Add/Remove Shadow ban',
      uuidRequired: true,
      requiresVIP: true,
    },
    {
      route: `./warnuser`,
      title: 'Warn user',
      uuidRequired: true,
      requiresVIP: true,
    },
    {
      route: `./cachepurge`,
      title: 'Clear cache / Purge segments',
      uuidRequired: true,
      requiresVIP: true,
    },
    {
      route: `./vip`,
      title: 'Add/Remove VIP',
      uuidRequired: true,
      requiresVIP: true,
    },
    {
      route: `./userinfo`,
      title: 'User Info',
      uuidRequired: false,
    },
    {
      route: `./browse`,
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

<svelte:head>
  <base href={baseUrl+'/'} />
</svelte:head>

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