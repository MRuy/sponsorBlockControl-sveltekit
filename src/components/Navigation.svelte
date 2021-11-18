<script lang="ts">
  import { ConfigStore, UserInfoStore } from '../stores';
  export let items = [];
  export let currentRoute = '';

  let clickedRoute = '';

  $: isCurrentRoute = function(route: string) {
    if (route !== './' && route.startsWith('./')) {
      return currentRoute.includes(route.replace('./', '/'));
    }
    else {
      if (route === './') {
        route = '/';
      }
      return currentRoute === route;
    }
  }
</script>

<nav>
  {#each items as item}
    <a
      class:active={isCurrentRoute(item.route)}
      class:is-loading={clickedRoute === item.route}
      on:click={() => clickedRoute = item.route}
      disabled={(item.uuidRequired === true && $ConfigStore.privateUUID === '') || (item?.requiresVIP === true && $UserInfoStore.vip !== true)}
      title={(item?.requiresVIP === true && $UserInfoStore.vip !== true) ? 'Requires VIP status' : ''}
      href={item.route}>
      {item.title}
    </a>
  {/each}
</nav>

<style>
  nav {
    margin-bottom: 16px;
  }

  nav a {
    --active-color: #f60c01;
    --loading-color: #a50800;
    --bg-color: #6c757d;
    background: none;
    box-sizing: border-box;
    margin: 3px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    color: #ced4da;
    background-color: var(--bg-color);
    border-color: var(--bg-color);
    cursor: pointer;
    text-decoration: none;
  }
  nav a:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  nav a.active {
    color: #000;
    --bg-color: var(--active-color);
  }
  nav .is-loading {
    --bg-color: var(--loading-color);
  }
</style>
