<script lang="ts">
  export let href: string;
  export let underline = true;
  export let text = "";
</script>

<div class="w-fit inline-flex">
  <a
    {href}
    class="group transition duration-300 w-fit hover:bg-black hover:text-white hover:font-bold dark:hover:bg-white dark:hover:text-black {underline
      ? 'underline underline-offset-4 decoration-2 decoration-black dark:decoration-white'
      : ''}"
  >
    <slot>
      <p>
        {text}
      </p>
    </slot>
  </a>
</div>
