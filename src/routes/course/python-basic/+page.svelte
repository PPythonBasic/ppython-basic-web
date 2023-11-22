<script lang="ts">
  import MetaTitle from "../components/meta-title.svelte";
  import passwordConfirm from "$lib/password";
  import videoCourseData from "$lib/python-basic/videoCourseData";
  import VideoConent from "../components/video-conent.svelte";
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
    <VideoConent {title} {linkVideo} {homework} />
  {/each}
</div>
