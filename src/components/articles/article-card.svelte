<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  export let title = "",
    img = "",
    pathToGo = "";

  let data: string = "";
  onMount(async () => {
    data = await fetch(
      `https://source.unsplash.com/random/400x600?${img},programming,code`
    ).then((x) => x.url);
  });
</script>

{#if data === ""}
  <div class="flex flex-col gap-4 w-[22rem] lg:w-[20rem] xl:w-[33rem] lg:h-96">
    <div class="skeleton h-32 w-full lg:h-96"></div>
    <div class="skeleton h-4 w-4/5"></div>
    <div class="skeleton h-4 w-full"></div>
    <div class="skeleton h-12 w-full"></div>
  </div>
{:else}
  <div
    class="card card-compact w-[22rem] lg:w-[20rem] xl:w-[33rem] h-64 lg:h-96 bg-base-100 shadow-xl border border-base-content"
  >
    <figure>
      <img src={data} alt={title} class="w-full" />
    </figure>
    <div class="card-title">
      <h2 class="px-4 py-2">{title}</h2>
    </div>
    <div class="card-body items-center lg:items-start">
      <a
        class="btn btn-primary btn-sm w-full"
        href="{base}/articles/article-content/{pathToGo}">อ่านบทความ</a
      >
    </div>
  </div>
{/if}
