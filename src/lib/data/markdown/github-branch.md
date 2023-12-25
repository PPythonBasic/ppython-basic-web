# **git checkout -b กับ git branch ต่างกันยังไง ?**

ใน Git เราสามารถแยกการทำงานออกเป็น branch ต่าง ๆ ได้ โดยแต่ละ branch จะมีประวัติการแก้ไขของตัวเองแยกจากกัน ทำให้เราสามารถทดลองแก้ไขโค้ดใหม่ ๆ ได้โดยไม่ต้องกระทบกับการทำงานบน branch หลัก (master)

คำสั่ง **git checkout -b** กับ **git branch** ต่างก็เป็นคำสั่งที่ใช้สร้าง branch ใหม่ แต่มีความแตกต่างที่สำคัญอยู่ตรงที่ **git checkout -b** จะทำการ checkout ไปยัง branch ใหม่ที่เราเพิ่งสร้างขึ้นมาทันทีหรือก็เปลี่ยน branch ปัจจุบันเป็น branch ที่เราสร้างขึ้นนั่นเอง แต่ในขณะที่ **git branch** เพียงแค่สร้าง branch ใหม่เท่านั้น ยังไม่ทำการ checkout ไปยัง branch นั้นๆ

**ตัวอย่างการใช้งาน**

```
# สร้าง branch ใหม่ชื่อ myNewBranch
$ git checkout -b myNewBranch
```

คำสั่งนี้จะทำการ checkout ไปยัง branch myNewBranch ใหม่ที่เราเพิ่งสร้างขึ้นมา ตัวอย่างเช่น

```
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

no changes added to commit (use "git add" to track)
```

```
$ git checkout -b myNewBranch
Switched to a new branch 'myNewBranch'
```

```
$ git status
On branch myNewBranch
nothing to commit, working tree clean
```

```
# สร้าง branch ใหม่ชื่อ myNewBranch
$ git branch myNewBranch
```

คำสั่งนี้จะสร้าง branch myNewBranch ขึ้นมาใหม่เท่านั้น ยังไม่ทำการ checkout ไปยัง branch นั้น ตัวอย่างเช่น

```
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

no changes added to commit (use "git add" to track)
```

```
$ git branch myNewBranch
* master
  myNewBranch
```

```
$ git checkout myNewBranch
Switched to branch 'myNewBranch'
```

**สรุป**

- **git checkout -b myNewBranch** จะทำการ checkout ไปยัง branch myNewBranch ใหม่ที่เราเพิ่งสร้างขึ้นมาทันที
- **git branch myNewBranch** เพียงแค่สร้าง branch myNewBranch ขึ้นมาเท่านั้น ยังไม่ทำการ checkout ไปยัง branch นั้น

**ตัวอย่างการใช้งานจริง**

สมมติว่าเรามีโปรเจ็กต์ชื่อ `my-project` อยู่ และเราต้องการทดลองแก้ไขโค้ดใหม่ ๆ บน branch ใหม่ เราสามารถใช้คำสั่ง **git checkout -b myNewBranch** เพื่อสร้าง branch ใหม่ชื่อ `myNewBranch` และทำการ checkout ไปยัง branch นั้นทันที จากนั้นเราก็สามารถเริ่มทดลองแก้ไขโค้ดใหม่ ๆ ได้เลย เมื่อทดลองเสร็จแล้ว เราก็สามารถ commit และ push การเปลี่ยนแปลงไปยัง branch หลักได้

```
# สร้าง branch ใหม่ชื่อ myNewBranch
$ git checkout -b myNewBranch

# ทดลองแก้ไขโค้ดใหม่ ๆ

# commit การเปลี่ยนแปลง
$ git commit -am "Add new feature"

# push การเปลี่ยนแปลงไปยัง branch หลัก
$ git push origin myNewBranch
```

หากเราต้องการเพียงแค่สร้าง branch ใหม่ไว้ก่อนแล้วค่อยมา checkout ทีหลัง เราก็สามารถใช้คำสั่ง **git branch myNewBranch** ได้ โดยที่ไฟล์ใน working tree ของเราจะยังคงอยู่ใน branch หลักอยู่ เมื่อต้องการ checkout ไปยัง branch ใหม่ เราก็สามารถใช้คำสั่ง **git checkout myNewBranch** ได้

```
# สร้าง branch ใหม่ชื่อ myNewBranch
$ git branch myNewBranch

# ทำงานต่อไปบน branch หลัก

# checkout ไปยัง branch myNewBranch
$ git checkout myNewBranch
```

# คำสั่งสำหรับลบ branch ใน Git

คำสั่งสำหรับลบ branch ใน Git มี 2 คำสั่ง คือ

- `git branch -d branch_name`
- `git push origin --delete branch_name`

คำสั่ง `git branch -d branch_name` ใช้สำหรับลบ branch ที่อยู่ในเครื่องของเราเท่านั้น ในขณะที่คำสั่ง `git push origin --delete branch_name` ใช้สำหรับลบ branch ทั้งในเครื่องของเราและบน remote repository ที่เราเชื่อมต่ออยู่

**ตัวอย่างการใช้งาน**

```
# ลบ branch myNewBranch ในเครื่องของเรา
git branch -d myNewBranch
```

คำสั่งนี้จะลบ branch myNewBranch ออกจากเครื่องของเรา ตัวอย่างเช่น

```
$ git branch
* master
```

# ลบ branch myNewBranch ทั้งในเครื่องของเราและบน remote repository

git push origin --delete myNewBranch

คำสั่งนี้จะลบ branch myNewBranch ออกจากเครื่องของเราและบน remote repository ตัวอย่างเช่น

```
$ git branch
* master
```

**ข้อควรระวัง**

- ห้ามลบ branch ที่เรากำลังทำงานอยู่ เพราะจะทำให้การเปลี่ยนแปลงของเราสูญหาย
- ห้ามลบ branch ที่ยังไม่ได้ push ไปยัง remote repository เพราะจะทำให้การเปลี่ยนแปลงของเราสูญหายบน remote repository เช่นกัน

**สรุป**

- คำสั่ง `git branch -d branch_name` ใช้สำหรับลบ branch ที่อยู่ในเครื่องของเราเท่านั้น
- คำสั่ง `git push origin --delete branch_name` ใช้สำหรับลบ branch ทั้งในเครื่องของเราและบน remote repository
