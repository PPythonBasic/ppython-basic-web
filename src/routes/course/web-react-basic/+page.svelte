<script lang="ts">
  import MetaTitle from "../components/meta-title.svelte";
  import passwordConfirm from "$lib/password";
  import videoCourseData from "$lib/web-react-basic/videoCourseData";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import VideoConent from "../components/video-conent.svelte";
  import { base } from "$app/paths";

  if (browser) {
    if (localStorage.getItem("password") != $passwordConfirm) {
      goto(`${base}/course`);
    }
  }
</script>

<MetaTitle title="Web React Basic" />
<div class="flex flex-col items-center m-4">
  {#each $videoCourseData as { title, linkVideo, homework }}
    <VideoConent {title} {linkVideo} {homework} />
  {/each}
</div>
