<script>
  export let title = "sdds";
  export let linkVideo = "qXY7HDyX1Qo";
  export let homework = "";
</script>

<div class="flex flex-col gap-2">
  <h1 class="text-xl"><b>{title}</b></h1>
  <iframe
    class="lg:w-[40rem] lg:h-[22rem] aspect-square lg:aspect-video rounded-lg"
    src="https://www.youtube.com/embed/{linkVideo}"
    frameborder="0"
    allowfullscreen
    {title}
  />

  <div class="collapse bg-base-200">
    <input type="checkbox" class="peer" />
    <div
      class="collapse-title bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-secondary-content"
    >
      การบ้าน {title}
    </div>
    <div
      class="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-secondary-content"
    >
      <p class="p-6 bg-base-100 rounded-box">{homework}</p>
    </div>
  </div>
  <div class="divider"></div>
</div>
