<script lang="ts">
    import "$lib/prism-themes/prism-gruvbox-dark.css";
    import type { PageData } from "./$types";
    import { formatDate } from "$lib/utils";

    export let data: PageData;
</script>

<!-- SEO -->
<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
    <!-- Tags -->
    <div
        class="pb-5 text-sm text-white/70 flex justify-between items-center flex-wrap"
    >
        <ul class="flex flex-wrap items-center gap-2">
            {#each data.meta.tags as tag}
                <li><span class="text-green-600">#</span>{tag}</li>
            {/each}
        </ul>
        <p>{formatDate(data.meta.date)}</p>
    </div>

    <!-- Title -->
    <hgroup class="pt-1 pb-16">
        <h1 class="text-2xl md:text-5xl pb-1">{data.meta.title}</h1>
        <p class="text-sm md:text-base text-white/70">
            {data.meta.description}
        </p>
    </hgroup>

    <!-- Post -->
    <div
        class="post-content prose prose-sm dark:prose-invert lg:prose-lg min-w-full"
    >
        <svelte:component this={data.content} />
    </div>
</article>

<style lang="postcss">
    .post-content :global(a) {
        @apply hover:text-green-600
    }
</style>
