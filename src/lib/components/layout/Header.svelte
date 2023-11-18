<script lang="ts">
	import { Button } from "$components/ui/button";
	import { CardStackPlus } from "radix-icons-svelte";
</script>

<div class="flex p-2">
	<Button on:click=" variant="secondary" class="fill-red-400">
		<CardStackPlus class="mr-2 h-[20px] w-[20px]" />
		Connect camera..
	</Button>
</div>
