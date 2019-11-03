<script>
	import { Router } from "svelte-routing";

	import Header from "./main-components/Header.svelte";
	import Footer from "./main-components/Footer.svelte";
	import Main from "./main-components/Main.svelte";

	import { settings } from "./siteSettings.js";
</script>

<main>
	<Router basepath={'/'}>
		{#if $settings}
			<Header title={$settings.siteTitle} />
		{/if}

		<Main />

		{#if $settings}
			<Footer footerData={$settings.siteFooter} />
		{/if}
	</Router>
</main>

<style lang="scss" global>
	@import "src/styles/index.scss";
</style>