<script>
  export let data;
  export let cover = false;
</script>

<style lang="scss">
  img {
    max-width: 100%;
    width: 100%;
  }

  picture.cover {
    display: block;
    position: relative;
    height: 100%;
    overflow: hidden;

    img {
      display: block;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>

<picture class:cover>
  {#each data.sources as source}
    <source srcset="{source.srcSet}" media="{source.media}">
  {/each}

  <img src="{data.src}" alt="{data.alt}">
</picture>


