<script lang="ts">
  interface Props {
    href: string;
    underline?: boolean;
    text?: string;
    children?: import('svelte').Snippet;
  }

  let {
    href,
    underline = true,
    text = "",
    children
  }: Props = $props();
</script>

<div class="w-fit inline-flex">
  <a
    {href}
    target="_blank" 
    class="group transition duration-300 w-fit hover:bg-black hover:text-white hover:font-bold dark:hover:bg-white dark:hover:text-black {underline
      ? 'underline underline-offset-4 decoration-2 decoration-black dark:decoration-white'
      : ''}"
  >
    {#if children}{@render children()}{:else}
      <p>
        {text}
      </p>
    {/if}
  </a>
</div>
