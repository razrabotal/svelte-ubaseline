<script>
  import { panels } from "./_PanelsList.svelte";

  export let data = [];
  
  const getComponent = item => panels[item.alias] || null;
</script>

{#each data as item}
  <svelte:component this={getComponent(item)} data={item.data} theme="{item.data.theme || 'default'}"/>
{/each}