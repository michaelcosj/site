<script lang="ts">
  import PostCard from "$lib/components/PostCard.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<section class="flex flex-col gap-8">
  <h1 class="text-4xl">Posts</h1>
  <div class="flex flex-col gap-6">
    {#each data.posts as post}
      <PostCard {post} />
    {/each}
  </div>
</section>
