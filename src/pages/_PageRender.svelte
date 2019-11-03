<script>
  import { onMount } from 'svelte';
  import { api } from '../config.js';
  import { pages } from './_PageList.svelte';
  import { settings } from "../siteSettings.js";

  export let alias;
  export let url;
  let data;
  
  const getComponent = alias => pages[alias] || null;

  $: pageTitle = data && $settings ? 
    `${data.title} ${$settings.pageTitleSeparator} ${$settings.siteTitle}` : '';

  async function getData() {
    data = await fetch(`${api + url}`).then(r => r.json());
  }

  onMount(getData);
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<svelte:component this={getComponent(alias)} {data}/>