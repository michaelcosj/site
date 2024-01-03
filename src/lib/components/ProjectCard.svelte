<script lang="ts">
    export let name: string;
    export let url: string;
    export let techUsed: string[];
</script>

<a href={url} class="transition duration-300 delay-100 hover:-translate-y-2">
    <div
        class="bg-neutral-950 text-white py-5 px-5 flex flex-wrap items-center gap-2"
    >
        <p class="text-lg">{name}</p>
        <ul class="flex flex-wrap items-center gap-2 text-sm text-white/80">
            {#each techUsed as tech}
                <li class="text-green-600">&bull;</li>
                <li>{tech}</li>
            {/each}
        </ul>
    </div>
</a>
