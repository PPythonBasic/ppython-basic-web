<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import SvelteMarkdown from "svelte-markdown";
  const params = $page.params.articlename;
  import markdownList from "$lib/data/markdown/markdownList";
  import { IconArticle, IconHome, IconTextCaption } from "@tabler/icons-svelte";
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
    }, 503);
  </script>
</svelte:head>

{#each $markdownList as { title, path, source }}
  {#if path === params}
    <div class="flex flex-row w-full px-4 justify-start lg:justify-center">
      <div class="text-sm breadcrumbs">
        <ul>
          <li>
            <a
              href="{base}/"
              class="flex flex-row items-center gap-1 justify-center"
              ><IconHome size={16} stroke={2} />หน้าแรก</a
            >
          </li>
          <li>
            <a
              href="{base}/articles"
              class="flex flex-row items-center gap-1 justify-center"
              ><IconArticle size={16} stroke={2} />บทความ</a
            >
          </li>
          <li class="flex flex-row items-center gap-1 justify-center">
            <IconTextCaption size={16} stroke={2} />{title}
          </li>
        </ul>
      </div>
    </div>
    <article
      class="prose-sm w-auto xl:w-[70rem] flex flex-col justify-center overflow-auto lg:prose-lg m-4"
    >
      <SvelteMarkdown {source} />
    </article>
  {/if}
{/each}
