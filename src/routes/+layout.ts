export const prerender = true;

import type { Post } from "$lib/types";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ fetch }) => {
	let posts: Post[] = [];

	try {
		const response = await fetch("/api/posts");
		posts = await response.json();
		return { posts };
	} catch (error) {
		console.log(error);
		return { posts };
	}
};
