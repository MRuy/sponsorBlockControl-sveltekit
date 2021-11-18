<script lang="ts">
  export let name;
  export let sorting = 'DESC';
  export let current = '';
</script>

<span
  class={`header ${$$props.class}`}
  title={`Sort by ${name}`}
  class:active={current === name}
  class:sort--asc={sorting === 'ASC'}
  on:click
>
  <slot />
</span>

<style>
.header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.header:after {
  content: '•';
  display: inline-block;
  width: 1em;
  text-align: center;
  opacity: 0.4;
}
.active:after {
  content: '▼';
  opacity: 1;
}
.active.sort--asc:after {
  content: '▲';
}
</style>
