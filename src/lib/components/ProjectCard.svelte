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

<a href={project.url} class="group">
  <div class="flex justify-between">
    <div class="w-full flex flex-col gap-1">
      <div class="w-full flex justify-between items-center">
        <p class="text-bold">{project.name}</p>
        <ul class="flex gap-3 min-w-fit items-center">
          {#if project.url}
            <li>
              <a href={project.url} class="hover:has-[svg]:text-blue-950">
                <LinkIcon />
              </a>
            </li>
          {/if}
          {#if project.github}
            <li>
              <a href={project.github} class="hover:has-[svg]:text-blue-950">
                <GithubIcon />
              </a>
            </li>
          {/if}
        </ul>
      </div>
      <p class="text-sm text-neutral-400">{project.description}</p>
      <ul class="flex flex-wrap items-center gap-2 text-sm text-white/80">
        {#each project.tags as tag}
          <li class="text-neutral-400">
            <span class="text-blue-800">&num;</span>
            {tag}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</a>
