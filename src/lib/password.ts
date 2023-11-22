import { writable } from 'svelte/store';
const password = import.meta.env.VITE_PASSWORD;

export default writable(password)