<script>
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";
</script>


<Nav />

<main class="relative md:px-24">
  <div class="pointer-events-none fixed inset-0 h-full w-full bg-[url(/grid.svg)] mask-radial-from-white mask-radial-from-75%"></div>
  <slot />
</main>

<Nav />
