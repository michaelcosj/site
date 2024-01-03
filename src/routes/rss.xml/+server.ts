export const prerender = true

import { title, description, url } from "$lib/config";
import type { Post } from "$lib/types";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch("/api/posts");
	const posts: Post[] = await response.json();

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${title}</title>
				<description>${description}</description>
				<link>${url}</link>
				<atom:link href="${url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${url}/${post.slug}</link>
							<guid isPermaLink="true">${url}/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`,
					)
					.join("")}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};
