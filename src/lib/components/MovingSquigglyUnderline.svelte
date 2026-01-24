<script lang="ts">
	import { onMount } from "svelte";
	import Squiggly from "./Squiggly.svelte";

  let squiggly: HTMLDivElement | undefined = $state(undefined)

  onMount(() => {
    let transform = 0

    function frame() {
      transform -= 0.150
      if (transform <= -96) {
        transform += 96
      }
      if (squiggly) {
        squiggly.style.transform = `translateX(${transform}px)`
      }
    }

    setInterval(frame, 1)
  })
</script>

<div class="overflow-hidden m-0">
  <div class="w-max flex squiggly" bind:this={squiggly}>
    <Squiggly/>
    <Squiggly/>
  </div>
</div>
