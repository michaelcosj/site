<script>
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";
</script>

<Nav />
  <div class="z-100 fixed inset-0 h-full w-full bg-[url(/grid.svg)] [mask-image:linear-gradient(black, transparent)]"></div>
  <main class="md:px-24">
    <slot />
  </main>
<Nav />
