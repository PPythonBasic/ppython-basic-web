<script lang="ts">
  import { IconChecks } from "@tabler/icons-svelte";
  import Contact from "../component/contact.svelte";
</script>

<div class="mt-14 flex items-center justify-center">
  <img
    src="https://avatars.githubusercontent.com/u/129375745?s=200&v=4"
    alt="logo"
    class="w-32 rounded-full"
  />
</div>
<div class="m-8">
  <h1 class="text-3xl text-center"><b>ราคา</b></h1>
</div>
<p class="text-center m-8">
  แพ็คเกจราคาไม่แพงเริ่มต้นเรียนกับเราวันนี้ได้เลย รับรองว่าเกินคุ้ม
</p>
<div class="flex flex-wrap gap-4 justify-center items-center m-6">
  <div class="card w-96 bg-base-300 shadow-xl lg:w-3/12 h-72">
    <div class="card-body">
      <span class="flex justify-between">
        <h2 class="card-title text-white"><b>เริ่มต้น</b></h2>
      </span>
      <p class="text-white"><b class="text-3xl">฿100</b> /ชั่วโมง</p>
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>สอนสดออนไลน์</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>ติวข้อสอบ</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>Remote พาเขียน</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>มีการบ้านให้ฝึกฝน</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>ต่อชั่วโมงถัดไป ฿100 /ชั่วโมง</p></span
      >
    </div>
  </div>
  <div class="card w-96 bg-base-300 shadow-xl lg:w-3/12 h-72">
    <div class="card-body">
      <span class="flex justify-between">
        <h2 class="card-title text-white">
          <b>จองมากกว่า 2 ชั่วโมง</b>
        </h2>
      </span>
      <p class="text-white"><b class="text-3xl">฿100</b> /ชั่วโมง</p>
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>สอนสดออนไลน์</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>ติวข้อสอบ</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>Remote พาเขียน</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>มีการบ้านให้ฝึกฝน</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>ต่อชั่วโมงถัดไป ฿60 /ชั่วโมง</p></span
      >
    </div>
  </div>
  <div class="card w-96 bg-base-300 shadow-xl lg:w-3/12 h-72">
    <div class="card-body">
      <span class="flex justify-between">
        <h2 class="card-title text-white">
          <b>เหมาเนื้อหาทั้งหมด</b>
        </h2>
      </span>
      <p class="text-white"><b class="text-3xl">฿500</b></p>
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>วิดีโอดูได้ทุกเวลา</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>สอบถามปัญหาได้ผ่านแชทไลน์</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>จ่ายครั้งเดียวดูได้ตลอด</p></span
      >
    </div>
  </div>
  <div class="card w-96 bg-base-300 shadow-xl lg:w-3/12 h-72">
    <div class="card-body">
      <span class="flex justify-between">
        <h2 class="card-title text-white">
          <b>รับสร้างโปรแกรม,เว็บไซต์แอพ แบบมินิโปรเจ็ค</b>
        </h2>
      </span>
      <p class="text-white"><b class="text-3xl">฿400++</b></p>
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>มีซอร์สโค้ดให้</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>มีคลิปอธิบายการทำงานของโปรแกรม</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>มัดจับ 100 บาท งานเสร็จสามารถโอนมาทีหลังได้</p></span
      >
    </div>
  </div>
</div>
<div class="m-8 flex flex-col items-center justify-center">
  <div class="m-8">
    <h1 class="text-2xl text-center text-white"><b>สนใจติดต่อ</b></h1>
  </div>
  <Contact />
</div>
