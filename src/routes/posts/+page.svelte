<script lang="ts">
    import PostCard from "$lib/components/PostCard.svelte";

    export let data;

    const posts = data.posts;
</script>

<section class="flex flex-col gap-8">
    <div class="flex items-start">
        <h1 class="text-4xl">Posts</h1>
        <span class="text-base">({posts.length})</span>
    </div>

    <div class="grid md:grid-cols-3 gap-5">
        {#each posts as post}
            <PostCard data={post} />
        {/each}
    </div>
</section>
