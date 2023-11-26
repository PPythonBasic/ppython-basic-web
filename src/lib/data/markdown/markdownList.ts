import { writable } from 'svelte/store';
import commit_github from "$lib/data/markdown/commit-github.md?raw";
import format_string_python from "$lib/data/markdown/format-string-python.md?raw";
import react1 from "$lib/data/markdown/react.md?raw";
import react2 from "$lib/data/markdown/react.md?raw";
import react3 from "$lib/data/markdown/react.md?raw";
import react4 from "$lib/data/markdown/react.md?raw";

const articlesMarkDown = [
    {
        title: "React : รู้เบื้องต้นเกี่ยวกับ JSX",
        path: "react4",
        source: react4
    },
    {
        title: "React : React คอมโพเนนต์ (Component)",
        path: "react3",
        source: react3
    },
    {
        title: "สร้างโปรเจ็กต์ React ด้วย Vite",
        path: "react2",
        source: react2
    },
    {
        title: "React เรียนรู้ไลบรารียอดนิยมที่ใช้สร้าง UI",
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


