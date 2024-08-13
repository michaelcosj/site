<script lang="ts">
  import { projects, title, socials } from "$lib/config";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Link from "$lib/components/Link.svelte";
  import PostCard from "$lib/components/PostCard.svelte";
  import type { PageData } from "./$types";
  // import SnakeGame from "$lib/components/SnakeGame.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<section>
  <div class="pb-12">
    <!-- heading -->
    <h1 class="mono text-4xl font-black pb-5">Michael Osajeh</h1>

    <p class="py-2 text-neutral-600 dark:text-neutral-400">
      Backend and fullstack web developer from Nigeria. Learning and building
      cool stuff with Typescript, Laravel and Golang.
    </p>

    <ul class="flex items-center gap-5 text-sm">
      {#each socials as account}
        <li class="mono">
          <Link href={account.url} text={account.name} />
        </li>
      {/each}
    </ul>
  </div>

  <!-- <SnakeGame /> -->

  <div class="flex flex-col gap-12">
    <!-- posts -->
    {#if data.recentPosts.length > 0}
      <div class="flex flex-col gap-4">
        <Link href="/posts">
          <p class="font-bold">Posts &UpperRightArrow;</p>
        </Link>
        <div class="flex flex-col gap-6">
          {#each data.recentPosts as post}
            <PostCard {post} />
          {/each}
        </div>
      </div>
    {/if}

    <div class="flex flex-col gap-4">
      <Link href="https://github.com/michaelcosj?tab=repositories">
        <p class="font-bold">Projects &UpperRightArrow;</p>
      </Link>
      <div class="flex flex-col gap-6">
        {#each projects as project}
          <ProjectCard {project} />
        {/each}
      </div>
    </div>
  </div>
</section>
