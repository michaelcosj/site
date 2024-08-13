<script>
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";
</script>

<Nav />

<main class="md:px-24">
  <slot />
</main>

<Nav />
