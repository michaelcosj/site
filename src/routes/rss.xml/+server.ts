export const prerender = true;

import { title, subtitle, url, authorName, authorEmail } from "$lib/config";
import type { Post } from "$lib/types";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch("/api/posts");
	const posts: Post[] = await response.json();

	let postEntries = "";
	for (const post of posts) {
		postEntries += `
            <entry>
                <author>
                    <name>${authorName}</name>
                    <email>${authorEmail}</email>name
                </author>
                <title>${post.title}</title>
                <summary>${post.description}</summary>
                <link href="${url}/${post.slug}" />
                <id>${post.slug}</id>
                <published>${new Date(post.date).toUTCString()}</published>
                <updated>${new Date(post.date).toUTCString()}</updated>
                <content type="text/html">
                    <p>todo</p>
                </content>
            </entry>
        `;
	}

	const xml = `
        <?xml version="1.0" encoding="utf-8"?>
        <feed xmlns="http://www.w3.org/2005/Atom">
            <title>${title}</title>
            <subtitle>${subtitle}</subtitle>
            <link href="${url}/rss.xml" rel="self" type="application/rss+xml" />
            <link rel="alternate" href="${url}" type="text/html" />
            <updated>${new Date(posts.at(-1)?.date || "").toUTCString()}</updated>
            <author>
                <name>${authorName}</name>
                <email>${authorEmail}</email>name
            </author>
            <id>${url}/rss.xml</id>
            ${postEntries}
        </feed>
	`.trim();

	return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};
