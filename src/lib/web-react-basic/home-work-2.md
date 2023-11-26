- สร้าง Component เพิ่มเติมคือ CardImage2
- Component `CardImage2` มีรายละเอียดดังนี้

  - มี props 3 ตัวชื่อว่า `titleImg`,`DetailImg`,`nameImg`
  - โค้ดใน return อ้างอิงจากโค้ด component `CardImage`

- `App.jsx` ให้ props เป็นหมวดอาหารเช่น steak และแสดง

```jsx
<CardImage2 titleImg="steak" DetailImg="อาหารสเต็ก" nameImg="steak" />
<CardImage2 titleImg="pizza" DetailImg="อาหารพิซซ่า" nameImg="pizza" />
<CardImage2 titleImg="barbecue" DetailImg="อาหารบาร์บีคิว" nameImg="barbecue" />
```

- แสดง components ออกมาอย่างละ 3 components
