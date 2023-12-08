import { writable } from 'svelte/store';
import reactHomeWork1 from "$lib/web-react-basic/home-work-1.md?raw";
import reactHomeWork2 from "$lib/web-react-basic/home-work-2.md?raw";
import reactHomeWork3 from "$lib/web-react-basic/home-work-3.md?raw";
import reactHomeWork4 from "$lib/web-react-basic/home-work-4.md?raw";
import reactHomeWork5 from "$lib/web-react-basic/home-work-5.md?raw";
import reactHomeWork6 from "$lib/web-react-basic/home-work-6.md?raw";
import reactHomeWork7 from "$lib/web-react-basic/home-work-7.md?raw";
import reactHomeWork8 from "$lib/web-react-basic/home-work-8.md?raw";
import reactHomeWork9 from "$lib/web-react-basic/home-work-9.md?raw";
import reactHomeWork10 from "$lib/web-react-basic/home-work-10.md?raw";
const reactHomeWorkMarkDown = [reactHomeWork1, reactHomeWork2, reactHomeWork3, reactHomeWork4, reactHomeWork5, reactHomeWork6, reactHomeWork7, reactHomeWork8, reactHomeWork9, reactHomeWork10];

export default writable(reactHomeWorkMarkDown)


