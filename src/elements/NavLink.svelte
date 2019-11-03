<script>
	import { Link } from "svelte-routing";

  export let url;
  export let activeClass;

	const getClass = ({ href, isPartiallyCurrent, isCurrent }) =>
    (href === "/" ? isCurrent : isPartiallyCurrent || isCurrent) ? 
    { class: activeClass } : { }; 
</script>

<Link 
  to='{url}' 
  getProps="{getClass}">
    <slot></slot>
</Link>