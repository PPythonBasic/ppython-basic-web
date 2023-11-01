<script lang="ts">
  import Modal from "./modal.svelte";
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md flex flex-col items-center gap-4">
      <img
        src="https://avatars.githubusercontent.com/u/129375745?s=200&v=4"
        alt="logo"
        class="w-32 rounded-full"
      />
      <h1 class="text-2xl md:text-5xl font-bold py-4">Ppython Basic</h1>
      <iframe
        class="w-full h-64 lg:w-[40rem] lg:h-[22rem] rounded-lg"
        width="100%"
        src="https://www.youtube.com/embed/XHzJAOPaFrs"
        frameborder="0"
        allowfullscreen
        title="Ppython Basic"
      />
      <Modal />
      <p class="py-4 text-left">
        สอนพื้นฐานการเขียนโปรแกรมด้วย Python เบื้องต้น
        หรือจะให้ช่วยติวข้อสอบก็ได้หรือใครสนใจจะทำเว็บไซต์หรือโปรแกรม
        ขึ้นเป็นของตัวเอง หรือเขียนบอท <b>Discord , Line , Telegram</b> ก็สามารถมาเรียนพื้นฐานได้
        ชั่วโมงละ 100 บาท หลังจากเรียน 2 ชั่วโมงขึ้นไป ชั่วโมงละ 60 บาท
      </p>

      <div
        class="inline-flex w-full flex-col items-stretch justify-center gap-2 px-4 md:flex-row xl:justify-start xl:px-0"
      >
        <button
          class="btn bg-[#06c755] text-white"
          on:click={() => window.open("https://lin.ee/CbNYGle")}
          ><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/768px-LINE_logo.svg.png"
            class="w-8 shadow-md rounded-xl"
            alt=""
          />@621jnpbb</button
        >
        <button
          class="btn bg-[#000001] text-white"
          on:click={() => window.open("https://twitter.com/ppybasic_python")}
          ><img
            src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
            class="w-6 shadow-md rounded-xl"
            alt=""
          />@ppybasic_python</button
        >
        <button
          class="btn bg-[#000001] text-white"
          on:click={() => window.open("https://www.tiktok.com/@ppython_basic")}
          ><img
            src="https://img.freepik.com/premium-vector/tik-tok-logo_578229-290.jpg"
            class="w-8 shadow-md rounded-xl"
            alt=""
          />รับสอนเขียนโปรแกรม Python</button
        >
      </div>
    </div>
  </div>
</div>
