import type { Post } from "$lib/types"
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const resp = await fetch('api/posts')
  const posts: Post[] = await resp.json()

  return { posts }
}
