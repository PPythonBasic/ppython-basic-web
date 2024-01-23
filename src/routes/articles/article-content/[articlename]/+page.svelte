<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import SvelteMarkdown from "svelte-markdown";
  const params = $page.params.articlename;
  import markdownList from "$lib/data/markdown/markdownList";
  import { IconArticle, IconHome, IconTextCaption } from "@tabler/icons-svelte";
  import Link from "../../../../renderers/Link.svelte";
  import { onMount } from "svelte";
  import { readable } from "svelte/store";

  const useState = (initValue: boolean) => {
    let setValue;
    const nameStore = readable(initValue, (set) => {
      setValue = set;
    });
    nameStore.subscribe((value) => {});
    return [nameStore, setValue];
  };
  const [start, setStart] = useState(false);

  onMount(() => {
    speechSynthesis.onvoiceschanged = () => {
      const voices = speechSynthesis.getVoices();
      console.log(voices);
    };
  });
  const markdownToText = (markdown: string) => {
    // Remove headers (e.g. ## Header)
    markdown = markdown.replace(/#{1,6}\s+/g, "");

    // Remove emphasis (e.g. *italic* or **bold**)
    markdown = markdown.replace(/\*{1,2}(.*?)\*{1,2}/g, "$1");

    // Remove code blocks (e.g. ```javascript ... ```)
    markdown = markdown.replace(/```[\s\S]*?```/g, "");

    // Remove inline code (e.g. `code`)
    markdown = markdown.replace(/`([^`]+)`/g, "$1");

    // Remove links (e.g. [text](url))
    markdown = markdown.replace(/\[(.*?)\]\(.*?\)/g, "$1");

    // Remove images (e.g. ![alt text](image url))
    markdown = markdown.replace(/!\[.*?\]\(.*?\)/g, "");

    // Remove unordered lists (e.g. * item)
    markdown = markdown.replace(/\n\s*\*\s+/g, "\n- ");

    // Remove ordered lists (e.g. 1. item)
    markdown = markdown.replace(/\n\s*\d+\.\s+/g, "\n");

    // Remove blockquotes (e.g. > quote)
    markdown = markdown.replace(/\n\s*>+/g, "\n");

    // Remove horizontal rules (e.g. ---)
    markdown = markdown.replace(/\n\s*---+\s*\n/g, "\n");

    // Remove line breaks
    markdown = markdown.replace(/\n/g, " ");

    // Trim leading/trailing white spaces
    markdown = markdown.trim();

    return markdown;
  };
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
    <div class="flex flex-row px-4 justify-start lg:justify-center">
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
    <div
      class="hidden lg:flex justify-center items-center w-full gap-2 bg-base-300 p-4 m-2 rounded-lg"
    >
      <p>อ่านบทวามด้วยเสียง (beta)</p>
      <button
        on:click={() => {
          const msg = new SpeechSynthesisUtterance();
          msg;
          msg.lang = "th";
          msg.text = markdownToText(source);
          msg.pitch = 0.9;
          msg.rate = 0.65;
          window.speechSynthesis.speak(msg);
          setStart(true);
        }}
        class="btn btn-sm hover:bg-base-100 {$start && 'btn-disabled'}"
        >เล่น</button
      >
      <button
        on:click={() => {
          window.speechSynthesis.resume();
        }}
        class="btn btn-sm hover:bg-base-100 {!$start && 'btn-disabled'}"
        >เล่นต่อ</button
      >
      <button
        on:click={() => {
          window.speechSynthesis.pause();
        }}
        class="btn btn-sm hover:bg-base-100 {!$start && 'btn-disabled'}"
        >หยุดชั่วคราว</button
      >
      <button
        on:click={() => {
          window.speechSynthesis.cancel();
          setStart(false);
        }}
        class="btn btn-sm hover:bg-base-100">หยุด</button
      >
    </div>
    <article
      class="prose-sm w-full xl:w-[70rem] flex flex-col justify-center overflow-auto lg:prose-lg m-4"
      id="article"
    >
      <SvelteMarkdown {source} renderers={{ link: Link }} />
    </article>
  {/if}
{/each}
