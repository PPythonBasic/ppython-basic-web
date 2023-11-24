import { writable } from 'svelte/store';
import reactHomeWork1 from "$lib/web-react-basic/home-work-1.md?raw";
import reactHomeWork2 from "$lib/web-react-basic/home-work-2.md?raw";
import reactHomeWork3 from "$lib/web-react-basic/home-work-3.md?raw";
const reactHomeWorkMarkDown = [reactHomeWork1, reactHomeWork2, reactHomeWork3];

export default writable(reactHomeWorkMarkDown)


