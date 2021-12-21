<script lang="ts">
  export let value = 0;

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let millisecondsLength = 3;
  let millisecondsStr = '0';

  $: {
    let _value = Number(value);
    let _valueStr = _value.toString();
    millisecondsStr = '0'.repeat(millisecondsLength);
    if (_valueStr.includes('.')) {
      millisecondsStr = _valueStr.split('.')[1].padEnd(millisecondsLength, '0').slice(0, millisecondsLength);
    }
    _value = Math.floor(value);
    hours = Math.floor(_value / 3600);
    minutes = Math.floor((_value / 60) % 60);
    seconds = Math.floor(_value % 60);
  }
</script>

<span class="time">
     <span class:inactive={hours === 0}>{hours}:</span><!--
  --><span class:inactive={minutes === 0}>{minutes.toString().padStart(2,'0')}:</span><!--
  --><span class="">{seconds.toString().padStart(2,'0')}.</span><!--
  --><span class="milliseconds">{millisecondsStr}</span>
</span>

<style>
.time {
  white-space: nowrap;
}
.inactive {
  opacity: 0.25;
}
.milliseconds {
  font-variant: all-small-caps;
}
</style>
