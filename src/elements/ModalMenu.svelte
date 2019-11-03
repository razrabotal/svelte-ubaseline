<script>
	import { createEventDispatcher } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  const dispatch = createEventDispatcher();
  const animation = { x: 200, duration: 200 };
</script>

<style lang="scss">
  @import "src/styles/base.scss";

	.modal {
    @include absolute-wrapper;
		overflow: auto;
		background: #ddd;
	}

	.close {
    @include reset-button;
    position: absolute;
    right: 30px;
    top: 30px;
    font-size: 2em;
    line-height: 0;
	}
</style>


<div class='modal' in:fly="{animation}" out:fly="{animation}">
	<slot></slot>

	<button 
    on:click='{() => dispatch("close")}' 
    class="close">
      &times;
  </button>
</div>
