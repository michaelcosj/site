<script lang="ts">
  import type { Post } from "$lib/types";
  import { formatDate } from "$lib/utils";

  export let data: Post;
  const { title, description, date, slug, tags } = data;

  function truncate(str: string, maxLen: number) {
    if (str.length < maxLen) {
      return str;
    }

    return str.slice(0, maxLen).trim().concat("...");
  }
</script>

<a
  href="/{slug}"
  class="transition duration-300 delay-100 hover:-translate-y-2"
>
  <div
    class="bg-green-950 text-neutral-50 py-5 px-5 flex flex-col gap-2 h-full"
  >
    <div class="flex items-center justify-between">
      <p class="text-white">{title}</p>
      <p class="text-xs">
        {formatDate(date)}
      </p>
    </div>
    <p class="text-sm">{truncate(description, 100)}</p>
    <ul class="flex flex-wrap items-center gap-2 text-sm">
      {#each tags as tag}
        <li><span class="text-green-600">#</span>{tag}</li>
      {/each}
    </ul>
  </div>
</a>
