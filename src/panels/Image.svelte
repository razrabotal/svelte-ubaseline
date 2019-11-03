<script>
  import Picture from "../elements/Picture.svelte";
  export let data;
  export let theme;
</script>

<div class="content {theme}">
  <p>Image {data.title}</p>

  {#if data.image}
    <Picture data={data.image}/>
  {/if}
</div>
