<script lang="ts">
  import "../../../lib/prism-themes/prism-gruvbox-dark.css"

  import { formatDate } from "$lib/utils";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <!-- Title -->
  <hgroup class="mono flex flex-wrap gap-1 justify-between items-center">
    <h1 class="text-4xl">{data.meta.title}</h1>
    <p class="text-neutral-600 text-sm">{formatDate(data.meta.date)}</p>
  </hgroup>

  <!-- description -->
  <div class="mono py-2">
    <p>{data.meta.description}</p>
  </div>

  <!-- Tags -->
  <div class="mono tags pt-2 pb-5 flex flex-wrap gap-2">
    {#each data.meta.tags as tags}
      <span class="surface-4"
        ><span class="text-blue-600">&num;</span>{tags}</span
      >
    {/each}
  </div>

  <!-- Post -->
  <div class="prose dark:prose-invert pt-8">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  :global(.prose a) {
    text-decoration-thickness: 2px;
    text-decoration-color: #172554;
  }

  :global(.prose a):hover {
    color: white;
    background-color: #172554;
  }

  :global(.prose :is(h1, h2, h3, h4, h5, h6)) {
    font-family: "Roboto Mono Variable";
  }
</style>
