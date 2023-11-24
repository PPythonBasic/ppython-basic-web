- สร้าง Component เพิ่มเติมคือ `Hi.jsx` และ `HelloTH.jsx`
- Component `Hi` มีรายละเอียดดังนี้
  - มี props 1 ตัวชื่อว่า `nameUser`
  - แสดงข้อความออกมาโดยใช้ `<p>Hi nameUser</p>`
  - **หมายเหตุ** nameUser ต้องเปลี่ยนให้แสดงข้อมูลออกโดยใช้เครื่องหมายอะไรลองดูด้วย
- Component `HelloTH` มีรายละเอียดดังนี้
  - มี props 1 ตัวชื่อว่า `nameUser`
  - แสดงข้อความออกมาโดยใช้ `<p>สวัสดี nameUser</p>`
  - **หมายเหตุ** nameUser ต้องเปลี่ยนให้แสดงข้อมูลออกโดยใช้เครื่องหมายอะไรลองดูด้วย
- หน้า `App.jsx` จะต้องมีการใช้ component ในลักษณะนี้

```
<Hi nameUser="Danai" />
<HelloTH nameUser="ดนัย" />
```

- แสดง components ออกมาอย่างละ 3 components
