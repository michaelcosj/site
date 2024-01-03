<script>
    import { page } from "$app/stores";

    $: isPostPage = $page.url.pathname.includes("posts");
</script>

<div>
    <a class="hover:text-white" href="mailto:michaelcosj@proton.me"
        >michaelcosj@proton.me</a
    >
</div>
<div>
    <ul class="flex items-center gap-1 text-sm">
        <li>
            <a
                href="/"
                class="hover:text-white {!isPostPage ? 'text-white' : ''}"
                >Home</a
            >
        </li>
        <li class="text-white">/</li>
        <li>
            <a
                href="/posts"
                class="hover:text-white {isPostPage ? 'text-white' : ''}"
                >Posts</a
            >
        </li>
        <li class="text-white">/</li>
        <li><a href="/" class="hover:text-white"> CV</a></li>
        <li class="text-white">/</li>
        <li><a href="/rss.xml" class="hover:text-white"> RSS</a></li>
    </ul>
</div>
