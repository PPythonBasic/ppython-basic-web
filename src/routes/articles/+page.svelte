<script lang="ts">
  import ArticleCard from "../../components/articles/article-card.svelte";
  import MetaTitle from "../../components/articles/meta-title.svelte";
  import markdownList from "$lib/data/markdown/markdownList";
</script>

<MetaTitle title="บทความทั้งหมด" />
<div class="flex flex-row w-96 justify-end my-4">
  <h1 class="text-sm">จำนวน {$markdownList.length} บทความ</h1>
</div>
<div class="flex flex-col">
  {#each $markdownList as { title, path }}
    <ArticleCard {title} img={path} pathToGo={path} />
    <div class="divider w-96"></div>
  {/each}
</div>
