<script lang="ts">
    import { projects, title } from "$lib/config";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<section>
    <div class="md:w-[90%] pb-12">
        <!-- heading -->
        <h1 class="text-4xl font-black dark:text-white pb-5">Hello World!</h1>

        <!-- bio -->
        <p class="text-justify text-base font-medium pb-3">
            I'm <span class="text-green-600">Michael</span>, a computer science
            graduate and software developer from
            <span class="text-green-600">Nigeria</span>, writing code for fun
            <strike>and profit</strike>
            (please
            <a
                class="transition underline duration-300 dark:text-white hover:text-green-600 hover:decoration-green-600"
                href="mailto:michaelcosj@proton.me">hire me!</a
            >🙏). <br />
            I build web services, CLI tools and whatever I want, usually with
            <span class="text-green-600">golang</span>,
            <span class="text-green-600">typescript</span>,
            <span class="text-green-600">python</span>, or
            <span class="text-green-600">c</span>. Check out some of my projects
            below!
        </p>
        <div class="flex items-center gap-3">
            <span class="dark:text-white">Say Hi: </span>
            <ul
                class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300/80"
            >
                <li>
                    <a
                        class="hover:text-green-600"
                        href="https://github.com/michaelcosj">Github</a
                    >
                </li>
                <li>
                    <a
                        class="hover:text-green-600"
                        href="https://linkedin.com/michael-osajeh-331995234"
                        >LinkedIn</a
                    >
                </li>
                <li>
                    <a
                        class="hover:text-green-600"
                        href="https://x.com/garlicIsDead"
                    >
                        Twitter</a
                    >
                </li>
            </ul>
        </div>
    </div>

    <div class="flex flex-col gap-5">
        <!-- projects -->
        <div class="text-sm md:text-base">
            <a
                href="https://github.com/michaelcosj?tab=repositories"
                class="hover:text-green-600">Projects &UpperRightArrow;</a
            >
        </div>
        <div class="grid md:grid-cols-2 gap-3">
            {#each projects as project}
                <ProjectCard {project} />
            {/each}
        </div>
    </div>
</section>
