<script>
  export let data;
  export let theme;
</script>

<style lang="scss">
  @import "src/styles/base.scss";

  section {
    border: 1px solid #ddd;
    margin-bottom: 20px;
  }
  
  .items {
    display: flex;
    justify-content: space-around;
  }
</style>

<section class={theme}>
  <p>Icon {data.title}</p>

  <div class="items">
    {#each data.items as item}
      <div class="item">
        <b>{item.title}</b>
        {@html item.description}
      </div>
    {/each}
  </div>
</section>
