import { writable } from 'svelte/store';
const data = [
  {
    title: "แนะนำเนื้อหาก่อนเริ่มเรียน",
    linkVideo: "XHzJAOPaFrs",
    homework: "",
  },
  {
    title: "พื้นฐาน (The Basic)",
    linkVideo: "6nLEFA81bg0",
    homework: "",
  },
  {
    title: "ควบคุมการไหลของข้อมูล",
    linkVideo: "ANoqYu-wGu8",
    homework: "",
  },



];

export default writable(data)


