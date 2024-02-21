<script lang="ts">
    import { projects, title } from "$lib/config";
    import PostCard from "$lib/components/PostCard.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    const posts = data.posts.slice(0, 4);
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<section class="grid md:grid-cols-2 gap-y-16 gap-x-3">
    <div class="flex flex-col gap-3 md:w-[90%]">
        <!-- heading -->
        <h1 class="text-4xl font-black text-white">Heyy there!</h1>
        <p class="text-justify text-base font-medium">
            I'm <span class="text-green-600">Michael</span>, a software
            developer and freelancer from
            <span class="text-green-600">Nigeria</span>, writing code for fun
            <strike>and profit</strike>
            (please
            <a
                class="transition underline duration-300 text-white hover:text-green-600 hover:decoration-green-600"
                href="mailto:michaelcosj@proton.me">hire me!</a
            >🙏). <br />
            I build web services and CLI tools usually with
            <span class="text-green-600">golang</span>,
            <span class="text-green-600">typescript</span>, or
            <span class="text-green-600">c</span>. <br />
            Check out my blog below, where I write about stuff I'm learning and projects
            I'm building.
        </p>
        <ul class="flex items-center gap-3 text-sm text-neutral-300/80">
            <span class="text-white">Say Hi: </span>
            <li>
                <a
                    class="hover:text-green-600"
                    href="https://github.com/michaelcosj">Github</a
                >
            </li>
            <li><a class="hover:text-green-600" href="/">LinkedIn</a></li>
            <li>
                <a
                    class="hover:text-green-600"
                    href="https://x.com/garlicIsDead"
                >
                    X</a
                >
            </li>
        </ul>
    </div>

    <div class="flex flex-col gap-5">
        <!-- projects -->
        <div class="flex items-center justify-between text-sm md:text-base">
            <p>Featured Projects</p>
            <a
                href="https://github.com/michaelcosj?tab=repositories"
                class="hover:text-green-600">All Projects</a
            >
        </div>
        <div class="flex flex-col gap-3">
            {#each projects as project}
                <ProjectCard
                    name={project.name}
                    url={project.url}
                    techUsed={project.techUsed}
                />
            {/each}
        </div>
    </div>

    <div class="col-span-full flex flex-col gap-5">
        <!-- projects -->
        <div class="flex items-center justify-between text-sm md:text-base">
            <p>Recent Posts</p>
            <a href="/posts" class="hover:text-green-600">All Posts</a>
        </div>
        <div class="grid md:grid-cols-2 gap-5">
            {#each posts as post}
                <PostCard data={post} />
            {/each}
        </div>
    </div>
</section>
