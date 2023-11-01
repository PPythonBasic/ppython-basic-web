<script lang="ts">
  const openModal = () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    modal.showModal();
  };
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md flex flex-col items-center gap-4">
      <img
        src="https://avatars.githubusercontent.com/u/129375745?s=200&v=4"
        alt="logo"
        class="w-32 rounded-full"
      />
      <h1 class="text-2xl md:text-5xl font-bold">Ppython Basic</h1>
      <iframe
        class="w-full h-64 lg:w-[40rem] lg:h-[22rem] rounded-lg"
        width="100%"
        src="https://www.youtube.com/embed/XHzJAOPaFrs"
        frameborder="0"
        allowfullscreen
        title="Ppython Basic"
      />
      <p class="py-4 text-left">
        สอนพื้นฐานการเขียนโปรแกรมด้วย Python เบื้องต้น
        หรือจะให้ช่วยติวข้อสอบก็ได้หรือใครสนใจจะทำเว็บไซต์หรือโปรแกรม
        ขึ้นเป็นของตัวเอง หรือเขียนบอท <b>Discord , Line , Telegram</b> ก็สามารถมาเรียนพื้นฐานได้
        ชั่วโมงละ 100 บาท หลังจากเรียน 2 ชั่วโมงขึ้นไป ชั่วโมงละ 60 บาท
      </p>
      <button class="btn btn-primary" on:click={openModal}>
        รายละเอียดที่สอน</button
      >
      <div class="flex gap-2 flex-wrap justify-center">
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

<dialog id="my_modal_2" class="modal z-50">
  <div class="modal-box">
    <h3 class="font-bold text-2xl text-center" id="title-modal">
      เนื้อหาที่จะสอน
    </h3>
    <p class="py-2 font-bold text-lg">สอนพื้นฐานเบื้องต้นการเขียนโปรแกรม</p>
    <p class="py-2 mx-8">- วิธีการคิดแบบคอมพิวเตอร์</p>
    <p class="py-2 mx-8">- เข้าใจการทำงานของคอมพิวเตอร์เบื้องต้น</p>
    <p class="py-2 mx-8">- เข้าวิธีการแก้ปัญหา</p>
    <p class="py-2 mx-8">- รู้จักตัวแปรและตัวประเภทตัวแปร</p>
    <p class="py-2 mx-8">- รู้จักตัวดำเนินการ</p>
    <p class="py-2 mx-8">- รู้จักการกำหนดเงื่อนไข</p>
    <p class="py-2 mx-8">- รู้จักการใช้การวนซ้ำแบบต่างๆ</p>
    <p class="py-2 mx-8">- รู้จัก logic ต่างๆ</p>
    <p class="py-2 mx-8">- การใช้งานฟังก์ชั่นและการสร้างฟังค์ชั่น</p>
    <p class="py-2 mx-8">- การเขียนโปรแกรมเชิงวัตถุ</p>
    <p class="py-2 mx-8">- การใช้งานข้อมูลในไฟล์</p>
    <p class="py-2 mx-8">- การจัดการข้อผิดพลาด</p>
    <p class="py-2 mx-8">- การ import ไลบราลีต่างๆ และการติดตั้ง</p>
    <p class="py-2 mx-8">- การจัดการ error การใช้ try except</p>
    <p class="py-2 font-bold text-lg">
      เสริมเพิ่มเติม (ถ้าผู้เรียนสนใจเรียนต่อหลังจากปูพื้นฐาน)
    </p>
    <p class="py-2 mx-8">- การใช้งาน GUI เบื้องต้น</p>
    <p class="py-2 mx-8">- การอ่าน Document เอกสาร Library ต่างๆ</p>
    <p class="py-2 mx-8">
      - การเรียกใช้ <b>request</b> เพื่อเรียกใช้งาน <b>API</b>
    </p>
    <p class="py-2 mx-8">- การทำงานเชื่อมกับฐานข้อมูล <b>SQLite</b></p>
    <p class="py-2 mx-8">- การสร้าง Web App ด้วย <b>Flask</b></p>
    <p class="py-2 mx-8">- การสร้าง Bot Discord ด้วย <b>Python</b></p>
    <p class="py-2 mx-8">- การสร้างโปรแกรมทำงานอัตโนมัติ</p>
    <div class="m-4 flex justify-end">
      <form method="dialog">
        <button class="btn btn-primary">ปิด</button>
      </form>
    </div>
  </div>

  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
