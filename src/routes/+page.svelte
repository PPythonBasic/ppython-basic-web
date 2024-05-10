<script lang="ts">
  import Modal from "./component/modal.svelte";
  import Contact from "./component/contact.svelte";
</script>

<div class="hero min-h-screen">
  <div class="hero-content text-center">
    <div class="max-w-md flex flex-col items-center gap-4 justify-center">
      <img
        src="https://avatars.githubusercontent.com/u/129375745?s=200&v=4"
        alt="logo"
        class="w-32 rounded-full"
      />
      <h1 class="text-2xl md:text-5xl font-bold py-4">Developer Basic</h1>
      <iframe
        class="w-full h-64 lg:w-[40rem] lg:h-[22rem] rounded-lg"
        width="100%"
        src="https://www.youtube.com/embed/XHzJAOPaFrs"
        frameborder="0"
        allowfullscreen
        title="Developer Basic"
      />
      <Modal />

      <p class="py-4 text-left">
        สอนพื้นฐานการเขียนโปรแกรมด้วย Python เบื้องต้น
        หรือจะให้ช่วยติวข้อสอบก็ได้หรือใครสนใจจะทำเว็บไซต์หรือโปรแกรม
        ขึ้นเป็นของตัวเอง หรือเขียนบอท <b>Discord , Line , Telegram</b> ก็สามารถมาเรียนพื้นฐานได้
      </p>
    </div>
  </div>
</div>
<div class="flex flex-col items-center justify-center mb-16">
  <p><Contact /></p>
</div>
