<script lang="ts">
  import ArticleCard from "../../components/articles/article-card.svelte";
  import MetaTitle from "../../components/articles/meta-title.svelte";
  import markdownList from "$lib/data/markdown/markdownList";
  import { readable } from "svelte/store";

  const useState = (initValue: string) => {
    let setValue;
    const nameStore = readable(initValue, (set) => {
      setValue = set;
    });
    nameStore.subscribe((value) => {});
    return [nameStore, setValue];
  };
  const [topic, setTopic] = useState("");
</script>

<MetaTitle
  title="บทความ{$topic == ''
    ? 'ทั้งหมด'
    : 'เกี่ยวกับ ' + $topic?.toUpperCase()}"
/>
<div class="flex flex-row justify-end my-4">
  <h1 class="text-sm">จำนวน {$markdownList.length} บทความ</h1>
</div>

<div class="p-4 flex flex-wrap gap-2">
  <button
    class="badge badge-primary text-md lg:text-lg p-4 {$topic != 'react' &&
      'badge-outline'}"
    on:click={() => setTopic("react")}>React</button
  >
  <button
    class="badge badge-primary text-md lg:text-lg p-4 {$topic != 'python' &&
      'badge-outline'}"
    on:click={() => setTopic("python")}>Python</button
  >
  <button
    class="badge badge-primary text-md lg:text-lg p-4 {$topic != 'flask' &&
      'badge-outline'}"
    on:click={() => setTopic("flask")}>Flask</button
  >
  <button
    class="badge badge-primary text-md lg:text-lg p-4 {$topic != 'github' &&
      'badge-outline'}"
    on:click={() => setTopic("github")}>Github</button
  >
  <button
    class="badge badge-primary text-md lg:text-lg p-4 {$topic != '' &&
      'badge-outline'}"
    on:click={() => setTopic("")}>ทั้งหมด</button
  >
</div>

<div
  class="flex flex-col lg:grid lg:grid-cols-3 lg:gap-4 items-center justify-center"
>
  {#each $markdownList as { title, path }}
    {#if path.slice(0, 5) == "react" && $topic == "react"}
      <ArticleCard {title} img={path} pathToGo={path} />
      <div class="divider w-96 lg:hidden"></div>
    {/if}
    {#if path.slice(0, 6) == "github" && $topic == "github"}
      <ArticleCard {title} img={path} pathToGo={path} />
      <div class="divider w-96 lg:hidden"></div>
    {/if}
    {#if path.slice(0, 6) == "python" && $topic == "python"}
      <ArticleCard {title} img={path} pathToGo={path} />
      <div class="divider w-96 lg:hidden"></div>
    {/if}
    {#if path.slice(0, 6) == "flask" && $topic == "flask"}
      <ArticleCard {title} img={path} pathToGo={path} />
      <div class="divider w-96 lg:hidden"></div>
    {/if}
    {#if $topic == ""}
      <ArticleCard {title} img={path} pathToGo={path} />
      <div class="divider w-96 lg:hidden"></div>
    {/if}
  {/each}
</div>
