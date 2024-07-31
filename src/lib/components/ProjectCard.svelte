<script lang="ts">
  export let project: {
    name: string;
    url: string;
    description: string;
    tags: string[];
  };
</script>

<a
  href={project.url}
  class="transition duration-300 delay-100 hover:-translate-y-1 w-full h-full"
>
  <div class="bg-green-950 text-neutral-50 py-5 px-5 h-full">
    <div class="flex flex-col items-start text-left gap-1">
      <p class="text-lg">{project.name}</p>
      <ul class="flex flex-wrap items-center gap-2 text-sm text-white/80">
        {#each project.tags as tag}
          <li class="text-green-600">&bull;</li>
          <li>{tag}</li>
        {/each}
      </ul>
      <p class="text-sm pt-6">{project.description}</p>
    </div>
  </div>
</a>
