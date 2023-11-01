<script lang="ts">
  const openModal = () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    modal.showModal();
  };
</script>

<div class="text-left">
  <dialog id="my_modal_2" class="modal z-50">
    <div class="modal-box">
      <h3 class="font-bold text-2xl text-center">เนื้อหาที่จะสอน</h3>
      <p class="py-2 font-bold text-lg">สอนพื้นฐานเบื้องต้นการเขียนโปรแกรม</p>
      <p class="py-2 mx-8">วิธีการคิดแบบคอมพิวเตอร์</p>
      <p class="py-2 mx-8">เข้าใจการทำงานของคอมพิวเตอร์เบื้องต้น</p>
      <p class="py-2 mx-8">เข้าวิธีการแก้ปัญหา</p>
      <p class="py-2 mx-8">รู้จักตัวแปรและตัวประเภทตัวแปร</p>
      <p class="py-2 mx-8">รู้จักตัวดำเนินการ</p>
      <p class="py-2 mx-8">รู้จักการกำหนดเงื่อนไข</p>
      <p class="py-2 mx-8">รู้จักการใช้การวนซ้ำแบบต่างๆ</p>
      <p class="py-2 mx-8">รู้จัก logic ต่างๆ</p>
      <p class="py-2 mx-8">การใช้งานฟังก์ชั่นและการสร้างฟังค์ชั่น</p>
      <p class="py-2 mx-8">การเขียนโปรแกรมเชิงวัตถุ</p>
      <p class="py-2 mx-8">การใช้งานข้อมูลในไฟล์</p>
      <p class="py-2 mx-8">การจัดการข้อผิดพลาด</p>
      <p class="py-2 mx-8">การ import ไลบราลีต่างๆ และการติดตั้ง</p>
      <p class="py-2 mx-8">การจัดการ error การใช้ try except</p>
      <p class="py-2 font-bold text-lg">
        เสริมเพิ่มเติม (ถ้าผู้เรียนสนใจเรียนต่อหลังจากปูพื้นฐาน)
      </p>
      <p class="py-2 mx-8">การใช้งาน GUI เบื้องต้น</p>
      <p class="py-2 mx-8">การอ่าน document เอกสาร library ต่างๆ</p>
      <p class="py-2 mx-8">การเรียกใช้ request เพื่อเรียกใช้งาน API</p>
      <p class="py-2 mx-8">การทำงานเชื่อมกับฐานข้อมูล sqlite</p>
      <p class="py-2 mx-8">การสร้าง Web App ด้วย Flask</p>
      <p class="py-2 mx-8">การสร้าง Bot discord ด้วย Python</p>
      <p class="py-2 mx-8">การสร้างโปรแกรมทำงานอัตโนมัติ</p>
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
</div>
<button class="btn btn-primary w-full" on:click={openModal}
  >รายเอียดที่สอน</button
>
