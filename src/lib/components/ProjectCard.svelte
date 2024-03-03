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
    <div class="bg-green-900 dark:bg-neutral-950 text-white py-5 px-5 h-full">
        <div class="flex flex-wrap items-center gap-1">
            <p class="text-lg">{project.name}</p>
            <ul class="flex flex-wrap items-center gap-2 text-sm text-white/80">
                {#each project.tags as tag}
                    <li class="text-green-600">&bull;</li>
                    <li>{tag}</li>
                {/each}
            </ul>
        </div>
    </div>
</a>
