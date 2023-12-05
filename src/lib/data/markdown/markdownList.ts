import { writable } from 'svelte/store';
import commit_github from "$lib/data/markdown/commit-github.md?raw";
import format_string_python from "$lib/data/markdown/format-string-python.md?raw";
import react1 from "$lib/data/markdown/reacts/react1.md?raw";
import react2 from "$lib/data/markdown/reacts/react2.md?raw";
import react3 from "$lib/data/markdown/reacts/react3.md?raw";
import react4 from "$lib/data/markdown/reacts/react4.md?raw";
import react5 from "$lib/data/markdown/reacts/react5.md?raw";
import react6 from "$lib/data/markdown/reacts/react6.md?raw";
import react7 from "$lib/data/markdown/reacts/react7.md?raw";
import react8 from "$lib/data/markdown/reacts/react8.md?raw";
import react9 from "$lib/data/markdown/reacts/react9.md?raw";
import react10 from "$lib/data/markdown/reacts/react10.md?raw";

const articlesMarkDown = [
    {
        title: "10. React: Data flow (การไหลของข้อมูล)",
        path: "react10",
        source: react10
    },
    {
        title: "9. React: Component props พร็อพของคอมโพเนนต์",
        path: "react9",
        source: react9
    },
    {
        title: "8. React: การจัดการ state",
        path: "react8",
        source: react8
    },
    {
        title: "7. React: การจัดการเหตุการณ์ (event) ของผู้ใช้",
        path: "react7",
        source: react7
    },
    {
        title: "6. การฝัง JavaScript ใน JSX",
        path: "react6",
        source: react6
    },
    {
        title: "5. React: ความแตกต่างระหว่าง JSX และ HTML",
        path: "react5",
        source: react5
    },
    {
        title: "4. React : รู้เบื้องต้นเกี่ยวกับ JSX",
        path: "react4",
        source: react4
    },
    {
        title: "3. React : React คอมโพเนนต์ (Component)",
        path: "react3",
        source: react3
    },
    {
        title: "2. สร้างโปรเจ็กต์ React ด้วย Vite",
        path: "react2",
        source: react2
    },
    {
        title: "1. React เรียนรู้ไลบรารียอดนิยมที่ใช้สร้าง UI",
        path: "react",
        source: react1
    },
    {
        title: "ข้อความ Commit แบบ Semantic",
        path: "commit-github",
        source: commit_github
    },
    {
        title: "การใช้ format string ใน Python",
        path: "format-string-python",
        source: format_string_python
    }];

export default writable(articlesMarkDown)


