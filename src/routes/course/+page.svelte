<script lang="ts">
  import Card from "./components/card.svelte";
  import MetaTitle from "./components/meta-title.svelte";
  import dataCourse from "$lib/dataCourse";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/nord.min.css"
  />

  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
  ></script>
  <script>
    setTimeout(() => {
      hljs.highlightAll();
    }, 1000);
  </script>
</svelte:head>

<MetaTitle title="เนื้อหาทั้งหมด" />
<div
  class="flex flex-col lg:flex-row flex-wrap items-center justify-center m-4 gap-4"
>
  {#each $dataCourse as { title, img, details, path, password }}
    <Card {title} {img} {details} {path} {password} />
  {/each}
</div>
