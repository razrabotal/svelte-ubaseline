<script>
  import { t, get } from '../translations.js';
  
  export let data;
  export let theme;
</script>

<style lang="scss">
  @import "src/styles/base.scss";

	p {
    font-size: 20px;
    @include theme(background-color, background-color);
  }
</style>

<div class="content {theme}">
  <p>Article {data.title} {get($t, 'global.title')}</p>
</div>
