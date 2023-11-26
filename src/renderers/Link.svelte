<script>
  export let href = "";
  export let title = undefined;
  export let text = "";
</script>

<a
  src={href}
  {title}
  on:click={() => {
    window.location.href = href;
  }}
  class="o-underline hover:underline hover:cursor-pointer"
>
  {text}
</a>
