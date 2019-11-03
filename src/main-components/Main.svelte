<script>
	import { onMount } from 'svelte';
	import { Route } from "svelte-routing";
  import { api } from "../config.js";
	import PageRender from "../pages/_PageRender.svelte";

	let routes = [];

	async function getData() {
		routes = await fetch(`${api}/routes`).then(r => r.json());
	}

	onMount(getData);
</script>

<div class="content">
  {#each routes as { url, alias }, i}
    <Route path='{url}'><PageRender {alias} {url}/></Route>
  {/each}
</div>

<style lang="scss">
  @import "src/styles/base.scss";

  .content {
    margin-bottom: 30px;
  }
</style>