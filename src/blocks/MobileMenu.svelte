<script>
	import ModalMenu from '../elements/ModalMenu.svelte';
	import NavLink from '../elements/NavLink.svelte';

	export let navigation = [];
	let isShownModal = false;

	const activeClass = 'active-nav-mob';
	const closeModal = () => isShownModal = false;
	const showModal = () => isShownModal = true;
</script>

<style>
	.container {
		max-width: 400px;
		margin: 40px auto;
	}

	.link {
		display: block;
		margin-bottom: 15px;
	}

	:global(.active-nav-mob) {
    border-bottom: 2px solid blue;
  }
</style>

<button on:click="{showModal}">Menu</button>

{#if isShownModal}
	<ModalMenu on:close="{closeModal}">
		
		<ul class="container">
			{#each navigation as { url, title }, i}
				<li class="link">
					<NavLink {url} {activeClass} on:click="{closeModal}">
						{title}
					</NavLink>
				</li>
			{/each}
		</ul>
		
	</ModalMenu>
{/if}