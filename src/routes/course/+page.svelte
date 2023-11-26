<script lang="ts">
  import Card from "./components/card.svelte";
  import MetaTitle from "./components/meta-title.svelte";
  import dataCourse from "$lib/dataCourse";
</script>

<MetaTitle title="เนื้อหาทั้งหมด" />
<div
  class="flex flex-col lg:flex-row flex-wrap items-center justify-center m-4 gap-4"
>
  {#each $dataCourse as { title, img, details, path, password }}
    <Card {title} {img} {details} {path} {password} />
  {/each}
</div>
