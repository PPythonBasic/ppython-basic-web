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
    homework: "เอกสาร : t.ly/ve7Cl",
  },
  {
    title: "ควบคุมการไหลของข้อมูล",
    linkVideo: "ANoqYu-wGu8",
    homework: "เอกสาร : t.ly/ve7Cl",
},
  
  

];

export default writable(data)


