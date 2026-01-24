<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>


<Nav />

<main class="relative md:px-24">
  <div class="pointer-events-none fixed inset-0 h-full w-full bg-[url(/grid.svg)] mask-linear-[white_75%,transparent_100%]"></div>
  {@render children?.()}
</main>

<Nav />
