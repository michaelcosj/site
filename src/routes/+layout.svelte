<script>
    import Nav from "$lib/components/Nav.svelte";
    import "../app.css";
</script>

<nav
    class="flex flex-col md:flex-row justify-between md:items-center text-sm dark:text-neutral-300/80 gap-2"
>
    <Nav />
</nav>

<slot />

<nav class="flex flex-col justify-between text-sm dark:text-neutral-300/80 gap-2">
    <Nav />
</nav>
