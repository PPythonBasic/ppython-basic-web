<script lang="ts">
  import MetaTitle from "../components/meta-title.svelte";
  import VideoContent from "../components/video-content.svelte";
  import videoCourseData from "$lib/flask-python/videoCourseData";
</script>

<MetaTitle title="Web Python Basic" />

<div class="flex flex-col max-w-sm lg:max-w-full items-center m-4">
  {#each $videoCourseData as { title, linkVideo, homework, data }}
    <VideoContent {title} {linkVideo} {homework} {data} />
  {/each}
</div>
