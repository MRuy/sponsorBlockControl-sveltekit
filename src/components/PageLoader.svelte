<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import navigationState from '../stores/navigationState';

    const progress = tweened(0, {
        duration: 3500,
        easing: cubicOut
    });
    const unsubscribe = navigationState.subscribe((state) => {
        if (state === 'loaded') {
            progress.set(1, { duration: 1000 });
        }
    });
    onMount(() => {
        progress.set(0.7);
    });
    onDestroy(() => {
        unsubscribe();
    });
</script>


<div class="progress-bar">
    <div class="progress-sliver" style={`--width: ${$progress * 100}%`} />
</div>

<style>
    .progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 0.3rem;
    }
    .progress-sliver {
        width: var(--width);
        background-color: rgb(194, 3, 3);
        height: 100%;
    }
</style>
