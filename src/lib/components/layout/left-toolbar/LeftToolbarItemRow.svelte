<script lang="ts">
	import { link } from "svelte-spa-router";
	import active from "svelte-spa-router/active";
	import type { LeftToolbarItem } from "./LeftToolbarItem";
	export let item: LeftToolbarItem;
</script>

<a use:link use:active={item.path} href={item.path} class="hover:bg-brand ml-6 flex cursor-pointer flex-row items-center gap-2 self-stretch rounded-l-lg p-2.5" class:active>
	<div class="flex items-end justify-start">{item.label}</div>
</a>

<style>
	.active {
		background: rgba(119, 4, 251, 1);
	}
</style>
