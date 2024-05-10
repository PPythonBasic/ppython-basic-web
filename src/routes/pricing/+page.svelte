<script lang="ts">
  import { IconChecks } from "@tabler/icons-svelte";
  import Contact from "../component/contact.svelte";
</script>

<svelte:head>
  <title>ราคา</title>
</svelte:head>

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
        <h2 class="card-title text-white"><b>เริ่มต้น Python</b></h2>
      </span>
      <p class="text-white"><b class="text-3xl">฿150</b> /ชั่วโมง</p>
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>สอนสดออนไลน์</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>เนื้อหาเขียนโปรแกรมเบื้องต้นมีให้ดูย้อนหลัง</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>Remote พาเขียน</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>มีการบ้านให้ฝึกฝน</p></span
      >
    </div>
  </div>
  <div class="card w-96 bg-base-300 shadow-xl lg:w-3/12 h-72">
    <div class="card-body">
      <span class="flex justify-between">
        <h2 class="card-title text-white"><b>สร้าง API ด้วย Python</b></h2>
      </span>
      <p class="text-white"><b class="text-3xl">฿150</b> /ชั่วโมง</p>
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>สอนสดออนไลน์</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>เนื้อหาเขียนโปรแกรมเบื้องต้นมีให้ดูย้อนหลัง</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>Remote พาเขียน</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>มีการบ้านให้ฝึกฝน</p></span
      >
    </div>
  </div>
  <div class="card w-96 bg-base-300 shadow-xl lg:w-3/12 h-72">
    <div class="card-body">
      <span class="flex justify-between">
        <h2 class="card-title text-white"><b>Go เบื้องต้น</b></h2>
      </span>
      <p class="text-white"><b class="text-3xl">฿250</b> /ชั่วโมง</p>
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>สอนสดออนไลน์</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>เนื้อหาเขียนโปรแกรมเบื้องต้นมีให้ดูย้อนหลัง</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>Remote พาเขียน</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>มีการบ้านให้ฝึกฝน</p></span
      >
    </div>
  </div>
  <div class="card w-96 bg-base-300 shadow-xl lg:w-3/12 h-72">
    <div class="card-body">
      <span class="flex justify-between">
        <h2 class="card-title text-white">
          <b>HTML/JS/React</b>
        </h2>
      </span>
      <p class="text-white"><b class="text-3xl">฿250</b></p>
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>สอนสดออนไลน์</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>เนื้อหาเขียนโปรแกรมเบื้องต้นมีให้ดูย้อนหลัง</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>Remote พาเขียน</p></span
      >
      <span class="flex items-center gap-2 text-sm"
        ><IconChecks size={16} class="text-success" />
        <p>มีการบ้านให้ฝึกฝน</p></span
      >
    </div>
  </div>
</div>
<div class="m-8 flex flex-col items-center justify-center">
  <div class="m-8">
    <h1 class="text-2xl text-center text-white"><b>สนใจติดต่อ</b></h1>
  </div>
  <p><Contact /></p>
</div>
