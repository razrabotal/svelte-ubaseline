import { readable } from 'svelte/store';
import { api2 } from "./config.js";

export const t = readable(null, function start(set) {
  return (async function() {
    const dictionary = await fetch(`${api2}/translations`).then(r => r.json());
    set(dictionary);
  })();
});

export const get = (value, key) => value ? value[key] : '';