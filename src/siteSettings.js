import { readable } from 'svelte/store';
import { api } from "./config.js";

export const settings = readable(null, function start(set) {
  return (async function() {
    const siteSettings = await fetch(`${api}?value=siteSettings`).then(r => r.json());
    set(siteSettings);
  })();
});