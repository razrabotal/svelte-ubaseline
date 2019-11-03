<script>
  import { onMount } from 'svelte';
  import { api } from '../config.js';
  import MobileMenu from '../blocks/MobileMenu.svelte';
  import NavLink from '../elements/NavLink.svelte';

  export let title = '';
  let navigation = [];

  async function getData() {
		navigation = await fetch(`${api}/navigation`).then(r => r.json());
  }
  onMount(getData);
</script>

<style lang="scss">
  @import "src/styles/base.scss";

  :global(.active-nav) {
    border-bottom: 2px solid red;
  }

  .mobile-menu {
    @include sm-hide;
  }

  nav {
    @include sm-show;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
</style>

<header>
  {title}

  <nav>
    {#each navigation as { url, title }, i}
      <NavLink {url} activeClass={'active-nav'}>
        {title}
      </NavLink>
    {/each}
  </nav>

  <div class="mobile-menu">
    <MobileMenu {navigation}/>
  </div>
</header>
