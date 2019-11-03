<script>
  import { t, get } from '../translations.js';
  
  export let data;
  export let theme;
</script>

<style lang="scss">
  @import "src/styles/base.scss";

  section {
    border: 1px solid #ddd;
    margin-bottom: 20px;
  }

	p {
    font-size: 20px;
    @include theme(background-color, background-color);
    @include theme(color, key-color);
  }
</style>

<section class={theme}>
  <p>Article {data.title} {get($t, 'global.title')}</p>
</section>
