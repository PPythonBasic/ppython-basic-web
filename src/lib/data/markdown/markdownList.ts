import { writable } from 'svelte/store';
import commit_github from "$lib/data/markdown/commit-github.md?raw";
import format_string_python from "$lib/data/markdown/format-string-python.md?raw";
import react from "$lib/data/markdown/react.md?raw";

const articlesMarkDown = [
    {
        title: "React เรียนรู้ไลบรารียอดนิยมที่ใช้สร้าง UI",
        path: "react",
        source: react
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


