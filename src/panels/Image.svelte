<script>
  import Picture from "../elements/Picture.svelte";
  export let data;
  export let theme;
</script>

<style lang="scss">
  @import "src/styles/base.scss";

  section {
    border: 1px solid #ddd;
    margin-bottom: 10px;
  }

  .image {
    height: 200px;
  }
</style>

<section class={theme}>
  <p>Image {data.title}</p>

  {#if data.image}
    <div class="image">
      <Picture data={data.image} cover />
    </div>
  {/if}
</section>
