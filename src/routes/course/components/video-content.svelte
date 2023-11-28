<script>
  import SvelteMarkdown from "svelte-markdown";
  export let title = "sdds";
  export let linkVideo = "qXY7HDyX1Qo";
  export let homework = "";
  export let data = "";
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div tabindex="0" class="collapse bg-base-200">
  <input type="checkbox" />
  <div class="collapse-title text-xl font-medium">
    <h1 class="text-xl">
      <b>{title} </b>
    </h1>
  </div>
  <div class="collapse-content">
    <div class="flex flex-col gap-2 items-center">
      <iframe
        class="w-full lg:max-w-full lg:w-[60rem] aspect-square lg:aspect-video rounded-lg"
        src="https://www.youtube.com/embed/{linkVideo}"
        frameborder="0"
        allowfullscreen
        {title}
      />

      <div
        class="collapse bg-base-200 max-w-xs lg:max-w-full lg:w-[60rem]"
        style="display: {homework === 'false'
          ? 'none'
          : homework === ''
            ? 'none'
            : ''}"
      >
        <input type="checkbox" class="peer" />
        <div
          class="collapse-title bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-base-content"
        >
          <h1 class="whitespace-normal">การบ้าน {title}</h1>
        </div>
        <div
          class="collapse-content bg-primary max-w-xs lg:max-w-full text-primary-content peer-checked:bg-base-200 peer-checked:text-base-content flex items-center justify-center"
        >
          <div class="bg-base-100 rounded-box prose lg:prose-xl">
            <div class="px-[11rem] lg:px-4 overflow-x-auto">
              <SvelteMarkdown source={data} />
            </div>
          </div>
        </div>
      </div>

      <div
        class="collapse bg-base-200 max-w-xs lg:max-w-full lg:w-[60rem]"
        style="display: {homework === '' ? '' : 'none'}"
      >
        <input type="checkbox" class="peer" />
        <div
          class="collapse-title bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-base-content"
        >
          <h1 class="whitespace-normal">อธิบายเพิ่มเติม {title}</h1>
        </div>
        <div
          class="collapse-content bg-primary max-w-xs lg:max-w-full text-primary-content peer-checked:bg-base-200 peer-checked:text-base-content flex items-center justify-center"
        >
          <div class="bg-base-100 rounded-box prose lg:prose-xl">
            <div class="px-[11rem] lg:px-4 overflow-x-auto">
              <SvelteMarkdown source={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="divider"></div>
