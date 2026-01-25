<script lang="ts">
  import { projects, title, socials, subtitle } from "$lib/config";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Link from "$lib/components/Link.svelte";
  import PostCard from "$lib/components/PostCard.svelte";
  import type { PageData } from "./$types";
  import MovingSquigglyUnderline from "$lib/components/MovingSquigglyUnderline.svelte";
  

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>{title}</title>
	<meta name={title} content={subtitle} />
</svelte:head>

<section>
  <div class="pb-12">
    <!-- heading -->
    <div class="pb-5 max-w-[300px]">
      <h1 class="mono text-4xl font-black text-nowrap">Michael Osajeh</h1>
      <MovingSquigglyUnderline/>
    </div>

    <p class="text-sm py-2 text-neutral-600 dark:text-neutral-400">
      Backend and fullstack web developer from Nigeria. Learning and building
      cool stuff with Typescript, Laravel and Golang.
    </p>

    <ul class="flex flex-wrap items-center gap-5 text-sm">
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
          <p class="font-bold">posts &UpperRightArrow;</p>
        </Link>
        <div class="flex flex-col gap-8">
          {#each data.recentPosts as post}
            <PostCard {post} />
          {/each}
        </div>
      </div>
    {/if}

    <div class="flex flex-col gap-4">
      <Link href="https://github.com/michaelcosj?tab=repositories">
        <p class="font-bold">projects &UpperRightArrow;</p>
      </Link>
      <div class="flex flex-col gap-8">
        {#each projects as project}
          <ProjectCard {project} />
        {/each}
      </div>
    </div>
  </div>
</section>
