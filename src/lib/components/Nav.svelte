<script lang="ts">
  import { page } from "$app/stores";
  import Link from "./Link.svelte";

  const menu = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "posts",
      url: "/posts",
    },
    {
      name: "CV",
      url: "https://docs.google.com/document/d/1r91WInGDLTX_vxGklXJzO_UMLuTdRzwm5WIuRh8lTxc/edit?usp=sharing",
    },
  ];

  $: isPostPage = $page.url.pathname.includes("posts");
  $: isHomePage = !isPostPage;
</script>

<nav
  class="md:px-24 flex flex-col md:flex-row justify-between md:items-center text-sm dark:text-neutral-50 gap-2"
>
  <div class="mono">
    <Link
      href="mailto:michaelcosj@proton.me"
      text="michaelcosj@proton.me"
      underline={false}
    />
  </div>

  <div class="mono">
    <ul class="flex items-center gap-1 text-sm">
      {#each menu as item, i}
        <li>
          <Link
            href={item.url}
            text={item.name}
            underline={(isPostPage && item.name === "posts") ||
              (isHomePage && item.name === "home")}
          />
        </li>
        {#if i + 1 !== menu.length}
          <li class="dark:text-white">/</li>
        {/if}
      {/each}
    </ul>
  </div>
</nav>
