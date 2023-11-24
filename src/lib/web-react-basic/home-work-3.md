- สร้าง Component เพิ่มเติมคือ `BoxText.jsx`
- Component `BoxText.jsx` มีรายละเอียดดังนี้

  - มี props ชื่อว่า `idText`
  - มี props ชื่อว่า `nameText`
  - มี props ชื่อว่า `isOpenText`
  - โค้ดอิงตาม `BoxCheat.jsx` แต่เปลี่ยน prop ให้ทำงานได้อย่างสมบูรณ์

- หน้า `App.jsx` จะต้องมีการใช้ component ในลักษณะนี้

```
<BoxText idText={} nameText={} isOpenText={} />
<BoxText idText={} nameText={} isOpenText={} />
<BoxText idText={} nameText={} isOpenText={} />
```

- อย่าลืม import component เข้ามาด้วยหล่ะ และใช้ค่าให้กับ prop แต่ละตัวเอง
