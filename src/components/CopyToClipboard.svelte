<script>
export let value = '';
export let title = 'Copy to clipboard';
let success = false;
function clickHandle() {
  navigator.clipboard.writeText(value).then(() => {
    /* clipboard successfully set */
    console.log('Copied to clipboard');
    success = true;
    setTimeout(_ => {
      success = false;
    }, 2000);
  }, (error) => {
    /* clipboard write failed */
    console.log('Failed to copy into clipboard', error);
  });
}
</script>

<button on:click={_ => clickHandle()} {title}>
  {#if success}
    <div class="success">Copied!</div>
  {/if}
  ✂
</button>

<style>
button {
  position: relative;
  border: none;
  background-color: transparent;
  color: var(--text-color);
  cursor: pointer;
}
.success {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  padding: 4px 6px;
  color: #fff;
  text-align: center;
  font-weight: 700;
  box-shadow: 0 0 black;
  word-break: pre;
  border-radius: 3px;
  background: rgba(0,0,0,0.9);
  z-index: 1000;
  word-break: keep-all;
  pointer-events: none;
}
</style>
