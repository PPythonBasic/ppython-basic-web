import { writable } from 'svelte/store';
const data = [
    {
      title: "บทที่ 1 ติดตั้งและใช้งาน Component เบื้องต้น",
      linkVideo: "qXY7HDyX1Qo",
      homework: "สร้าง Component เพิ่มเติมคือ Hi.jsx และ HelloTH.jsx โดย ให้เป็น Component ชื่อว่า Hi กับ HelloTH โดยข้อความใน Hi จะแสดงว่า Hi ตามด้วย props ของ ส่วนของ HelloTH จะแสดงว่า สวัสดี ตามด้วย props ของ HelloTH",

    },

];

export default writable(data)


