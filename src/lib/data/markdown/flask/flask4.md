# Flask : การใช้งานเทมเพลต (Templates)

ในการสร้างเว็บไซต์ด้วย Flask นอกจากจะต้องมีโครงสร้างของเว็บไซต์แล้ว เรายังต้องใช้งานเทมเพลตเพื่อแสดงผลข้อมูลให้กับผู้ใช้งานได้อย่างสวยงามและเป็นระเบียบ

## รูปแบบของเทมเพลต (Templates)

เทมเพลตใน Flask คือไฟล์ HTML ที่ใช้สร้างหน้าเว็บของเรา โดยเราสามารถใส่โค้ด Python ลงในไฟล์ HTML ได้นั่นเองเพื่อให้เราสามารถแสดงผลข้อมูลได้ตามต้องการ

เราสามารถใช้เทมเพลตใน Flask ได้โดยใช้โมดูล `render_template` ที่มีอยู่ใน Flask ซึ่งจะช่วยให้เราสามารถแสดงผลเทมเพลตได้ในหน้าเว็บของเรา

ตัวอย่างการใช้เทมเพลตใน Flask ใน`app.py`:

```py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'สวัสดี Flask!'

if __name__ == '__main__':
    app.run()
```

เปลี่ยนเป็น

```py
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return 'สวัสดี Flask!'

if __name__ == '__main__':
    app.run()
```

จากนั้นทำการสร้างไฟล์ `index.html` ไว้ในโฟลเดอร์ `templates` ในลักษณะนี้:
![](https://cdn.discordapp.com/attachments/372372440334073859/1180609541189152961/image.png?ex=657e0b51&is=656b9651&hm=a9da2c7bf1d88ff7d9b22243d6882e969ccb0cd4a44a405c148c9128bbac6850&)

จากนั้นเขียนโค้ด `HTML` แบบง่ายในไฟล์ `index.html` ดังนี้:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>สวัสดี</title>
  </head>
  <body>
    <h1>สวัสดี Flask</h1>
  </body>
</html>
```

อย่าลืม บันทึกด้วยนะโดยการกด `ctrl+s` จากนั้นในไฟล์ `app.py` แก้ไขโค้ดดังนี้:

```py
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
```

จากนั้นทำการรันโดยใช้คำสั่งใน`terminal`ดังนี้:

```sh
python app.py
```

ก็จะได้มาในลักษณะนี้:
![](https://cdn.discordapp.com/attachments/372372440334073859/1180610730400174080/image.png?ex=657e0c6c&is=656b976c&hm=d3272f8d11b4a98c075304757d293d894950252b05d944eac1ce5e23cd760e79&)

ในตัวอย่างข้างต้น เราใช้ฟังก์ชัน `render_template` เพื่อแสดงผลเทมเพลตที่ชื่อว่า `index.html` ในหน้าเว็บเพื่อให้เราสามารถแสดงผลข้อมูลต่างๆผ่าน Tag HTML ได้นั่นเอง

## การส่งข้อมูลไปยังเทมเพลต

เราสามารถส่งข้อมูลไปยังเทมเพลตเพื่อแสดงผลในหน้าเว็บได้ โดยเราสามารถส่งข้อมูลผ่านพารามิเตอร์ของฟังก์ชัน `render_template` ได้

ตัวอย่างการส่งข้อมูลไปยังเทมเพลต:

```py
@app.route('/')
def home():
    name = 'Danai'
    return render_template('index.html', name=name)
```

`name` คือตัวแปรที่เป็น`str`โดยมีข้อมูลคือ `Danai`
`render_template('index.html', name=name)` นอกจากส่งข้อมูลไปยังเทมเพลตเราไฟล์ไหนแล้วเรายีงต้องใส่ตัวแปรชื่อ `name` เข้าไปเพื่อนำไปใช้ในไฟล์ `index.html` ในอนาคต `name=name` อาจจะเป็น `data=name` ก็ได้หรือเป็นอะไรก็ได้ แต่เพื่อลดความสับสนในอนาคตพยายามใช้ชื่อให้เหมาะสมกับสิ่งที่กำลังจะทำจะทำจะเป็นการดีกว่า

โค้ดโดยรวมของ`app.py`:

```py
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    name = 'Danai'
    return render_template('index.html', name=name)

if __name__ == '__main__':
    app.run()
```

ในตัวอย่างข้างต้น เราส่งข้อมูลชื่อ `Danai` ไปยังเทมเพลต `index.html` และเราสามารถใช้ตัวแปร `name` ในไฟล์ HTML เพื่อแสดงผลชื่อนั้นในหน้าเว็บได้

## การใช้งานตัวแปรในเทมเพลต

เราสามารถใช้ตัวแปรในเทมเพลตเพื่อแสดงผลข้อมูลหรือทำการคำนวณต่าง ๆ ได้

ตัวอย่างการใช้งานตัวแปรในเทมเพลตในไฟล์ `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>สวัสดี, {{ name }}</title>
  </head>
  <body>
    <h1>สวัสดี, {{ name }}</h1>
    <p>ยินดีต้อนรับสู่เว็บไซต์ของเรา</p>
  </body>
</html>
```

ทำการหยุดเซิฟเวอร์โดยกด `Ctrl + C` เพื่อหยุดการทำงานและรันเซิฟเวอร์ใหม่แล้วเปิดลิงก์ในเบราว์เซอร์ของเราจะได้ลักษณะนี้:
![](https://cdn.discordapp.com/attachments/372372440334073859/1180613083329204334/image.png?ex=657e0e9d&is=656b999d&hm=118272539b6df2b746cd426b7e1cd17f05e232e08991a86f7963952d5e58fb0f&)
