<script lang="ts">
  export let href: string;
  export let underline = true;
  export let text = "";
</script>

<div class="w-fit inline-flex">
  <a
    {href}
    class="group transition duration-300 w-fit hover:bg-blue-950 hover:text-white {underline
      ? 'underline underline-offset-4 decoration-2 decoration-blue-950'
      : ''}"
  >
    <slot>
      <p>
        {text}
      </p>
    </slot>
  </a>
</div>
