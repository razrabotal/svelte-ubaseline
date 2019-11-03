<script>
  import PanelsRender from '../panels/_PanelsRender.svelte';
  export let data;
</script>

{#if data}
  <PanelsRender data='{data.panels}'/>
{/if}