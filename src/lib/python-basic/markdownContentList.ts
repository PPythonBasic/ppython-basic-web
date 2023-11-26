import { writable } from 'svelte/store';
import pythonBasicContent1 from "$lib/python-basic/content-md/content-lesson-1.md?raw";
import pythonBasicContent2 from "$lib/python-basic/content-md/content-lesson-2.md?raw";
const pythonBasicContentMarkDown = ["", pythonBasicContent1, pythonBasicContent2];

export default writable(pythonBasicContentMarkDown)


