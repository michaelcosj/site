<script lang="ts">
  export let href: string;
  export let text = "";
</script>

<div class="w-fit inline-flex">
  <a {href} class="group text-green-600 transition duration-300 w-fit">
    <slot>{text}</slot>
    <span
      class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-white bg-green-600"
    ></span>
  </a>
</div>
