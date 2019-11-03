<script>
  export let data;
</script>

<style>
  img {
    max-width: 100%;
  }
</style>

<picture>
  {#each data.sources as source}
    <source srcset="{source.srcSet}" media="{source.media}">
  {/each}

  <img src="{data.src}" alt="{data.alt}">
</picture>


