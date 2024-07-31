<script lang="ts">
  import { projects, title, socials } from "$lib/config";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Link from "$lib/components/Link.svelte";
  import PostCard from "$lib/components/PostCard.svelte";

  const data = {
    title: "Hello There",
    description:
      "If your component uses TypeScript for example, it has to be transformed to JavaScript first, before it goes through the Svelte compiler — you’re already using vitePreprocess in your Svelte project for handling everything from TypeScript, to PostCSS through Vite. Another great example is Melt UI which provides a custom preprocessor to enhance the developer experience by reducing boilerplate.",
    date: "2024-02-15",
    published: false,
    slug: "my-first-post",
    tags: ["hello", "first"],
  };
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<section>
  <div class="md:w-[90%] pb-12">
    <!-- heading -->
    <h1 class="text-4xl font-black dark:text-white pb-5">Hello World!</h1>

    <!-- bio -->
    <p class="text-justify text-neutral-50 font-medium pb-3">
      I'm <b>Michael</b>, a passionate software developer from
      <b>Nigeria</b>, writing code for fun
      <strike>and profit</strike> (please <Link
        href="mailto:michaelcosj@proton.me"
        text="hire me!🙏"
      />).
      <br />
      I love learning new things and building software, usually with
      <b>PHP</b>, <b>golang</b> or <b>typescript</b>. Check out my blog and some
      of my projects below!
    </p>
    <div class="flex items-center gap-3">
      <span class="dark:text-white">Say Hi: </span>
      <ul
        class="flex items-center gap-5 text-sm text-neutral-600 dark:text-neutral-300/80"
      >
        {#each socials as account}
          <li>
            <Link href={account.url} text={account.name} />
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="flex flex-col gap-5">
    <!-- posts -->
    <div class="text-sm md:text-base">
      <Link href="https://github.com/michaelcosj?tab=repositories">
        <p class="font-bold text-white">Posts &UpperRightArrow;</p>
      </Link>
    </div>
    <div class="grid md:grid-cols-2 gap-3">
      <PostCard {data} />
    </div>

    <!-- projects -->
    <div class="text-sm md:text-base">
      <Link href="https://github.com/michaelcosj?tab=repositories">
        <p class="font-bold text-white">Projects &UpperRightArrow;</p>
      </Link>
    </div>
    <div class="grid md:grid-cols-2 gap-3">
      {#each projects as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </div>
</section>
