<script lang="ts">
  import Card from "./components/card.svelte";
  import MetaTitle from "./components/meta-title.svelte";
  import dataCourse from "$lib/dataCourse";
</script>

<div
  class="flex flex-col lg:flex-row flex-wrap items-center justify-center m-4 gap-4"
>
  <MetaTitle title="เนื้อหาทั้งหมด" />
  {#each $dataCourse as { title, img, details, path }}
    <Card {title} {img} {details} {path} />
  {/each}
</div>
