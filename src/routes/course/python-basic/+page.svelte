<script lang="ts">
  import MetaTitle from "../components/meta-title.svelte";
  import passwordConfirm from "$lib/password";
  import videoCourseData from "$lib/python-basic/videoCourseData";
  import VideoContent from "../components/video-content.svelte";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";

  if (browser) {
    if (localStorage.getItem("password") != $passwordConfirm) {
      goto("/course");
    }
  }
</script>

<MetaTitle title="Python Basic" />
<div class="flex flex-col items-center m-4">
  {#each $videoCourseData as { title, linkVideo, homework }}
    <VideoContent {title} {linkVideo} {homework} />
  {/each}
</div>

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
