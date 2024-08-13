<script lang="ts">
  import GithubIcon from "./GithubIcon.svelte";
  import LinkIcon from "./LinkIcon.svelte";

  export let project: {
    name: string;
    url?: string;
    github?: string;
    description: string;
    tags: string[];
  };
</script>

<div class="flex justify-between group">
  <div class="w-full flex flex-col gap-1">
    <div class="w-full flex justify-between items-center">
      <p class="font-bold">{project.name}</p>
      <ul class="flex gap-3 min-w-fit items-center">
        {#if project.url}
          <li>
            <a href={project.url}>
              <div
                class="px-0.5 hover:bg-black hover:has-[svg]:text-white dark:hover:bg-white hover:has-[svg]:text-black"
              >
                <LinkIcon />
              </div>
            </a>
          </li>
        {/if}
        {#if project.github}
          <li>
            <a href={project.github}>
              <div
                class="px-0.5 hover:bg-black hover:has-[svg]:text-white dark:hover:bg-white hover:has-[svg]:text-black"
              >
                <GithubIcon />
              </div>
            </a>
          </li>
        {/if}
      </ul>
    </div>
    <p class="text-neutral-600 dark:text-neutral-400">
      {project.description}
    </p>
    <ul class="flex flex-wrap items-center gap-2 text-sm">
      {#each project.tags as tag}
        <li class="text-neutral-600 dark:text-neutral-400">
          <span class="text-black dark:text-white">&bullet;</span>
          {tag}
        </li>
      {/each}
    </ul>
  </div>
</div>
