import { error } from '@sveltejs/kit'
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug
  console.log(slug)

  try {
    const post = await import(`../../../posts/${slug}.md`)

    return {
      content: post.default,
      meta: post.metadata
    }
  } catch (err) {
    console.log(err)
    error(404, `Could not find ${slug}`)
  }
}
