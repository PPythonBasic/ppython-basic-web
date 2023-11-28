import { writable } from 'svelte/store';
const data = [
  {
    title: "บทที่ 1 เอามาใช้กับ render_template",
    linkVideo: "yoZmjH3yxcE",
    homework: "false",
  },
  {
    title: "บทที่ 2 materializecss และ extends และ block",
    linkVideo: "k3PNgfORiGo",
    homework: "false",
  },
  {
    title: "บทที่ 3 url_for และ request.endpoint ทำลิงก์ยังไง",
    linkVideo: "koDM2JGFAj4",
    homework: "false",
  },
  {
    title: "บทที่ 4 static และ การใช้ css เบื้องต้น",
    linkVideo: "IsYbkF1Brdc",
    homework: "false",
  },
  {
    title: "บทที่ 5 การส่งตัวแปรเพื่อไปใช้งาน HTML และการ For Loop",
    linkVideo: "jyXI7u1mgqU",
    homework: "false",
  },
  {
    title: "บทที่ 6 สร้าง เพิ่ม ดึงข้อมูล ฐานข้อมูลกับ SQLite",
    linkVideo: "AkcVHM96uTs",
    homework: "false",
  },
  {
    title: "บทที่ 7 การลบและแก้ไขฐานข้อมูล",
    linkVideo: "j4Y8_A6o_Q0",
    homework: "false",
  },
  {
    title: "บทที่ 8 จัดการข้อมูลและการเข้าสู่ระบบด้วย Extension ของ Flask",
    linkVideo: "t8Jz6GAdvtI",
    homework: "false",
  },



];

export default writable(data)


