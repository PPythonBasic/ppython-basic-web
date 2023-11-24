<script lang="ts">
  import MetaTitle from "../components/meta-title.svelte";
  import passwordConfirm from "$lib/password";
  import videoCourseData from "$lib/web-react-basic/videoCourseData";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import VideoContent from "../components/video-content.svelte";
  import { base } from "$app/paths";
  import reactHomeWorkMarkDown from "$lib/web-react-basic/markdownHomeworkList";

  $videoCourseData.forEach((obj, index) => {
    obj.data = $reactHomeWorkMarkDown[index];
  });

  console.log($videoCourseData);

  if (browser) {
    if (localStorage.getItem("password") != $passwordConfirm) {
      goto(`${base}/course`);
    }
  }
</script>

<MetaTitle title="Web React Basic" />
<div class="flex flex-col max-w-sm lg:max-w-full items-center m-4">
  {#each $videoCourseData as { title, linkVideo, homework, data }}
    <VideoContent {title} {linkVideo} {homework} {data} />
  {/each}
</div>
