import { writable } from 'svelte/store';
const password = import.meta.env.VITE_PASSWORD;
const data = [
    {
      title: "Python Basic",
      img: "python-programming-language",
      details: "สอนพื้นฐานการเขียนโปรแกรมด้วย Python เบื้องต้น",
      path: "python-basic",
      password: password,
    },
    {
      title: "สร้างเว็บไซต์ด้วย Python",
      img: "web-development",
      details: "สอนพื้นฐานการสร้างเว็บไซต์ด้วย Python เบื้องต้น",
      path: "web-python-basic",
      password: password,
    },
    {
      title: "สร้างเว็บไซต์ Frontend ด้วย React",
      img: "web-react",
      details: "สอนพื้นฐานการสร้างเว็บไซต์ Frontend ด้วย React",
      path: "web-react-basic",
      password: password,
    },
];


export default writable(data)


