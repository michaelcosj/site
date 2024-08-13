<script lang="ts">
  import type { Post } from "$lib/types";
  import { formatDate } from "$lib/utils";

  export let post: Post;

  function truncate(str: string, maxLen: number) {
    if (str.length < maxLen) {
      return str;
    }

    return str.slice(0, maxLen).trim().concat("...");
  }
</script>

<a href="/posts/{post.slug}" class="group">
  <div class="flex justify-between">
    <div>
      <p
        class="font-bold pb-1 transition-all max-w-fit group-hover:bg-black"
      >
        {post.title}
      </p>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">
        {truncate(post.description, 100)}
      </p>
    </div>
    <div class="min-w-fit">
      <p class="text-xs text-neutral-600 text-neutral-400">
        {formatDate(post.date)}
      </p>
    </div>
  </div>
</a>
