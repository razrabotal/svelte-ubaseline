<script>
  import { t, get } from '../translations.js';
  
  export let footerData;
</script>

<footer>
  {get($t, 'global.footer.title')}

  {#if footerData && footerData.footerLinks}
    {#each footerData.footerLinks as { name }, i}
      <span>{i} - {name} </span>
    {/each}
  {/if}
</footer>

<style>
  footer {
    margin-top: 32px;
  }
</style>