<script lang="ts">
	import { Button } from "$components/ui/button";
	import { toggleMode } from "mode-watcher";
	import { Camera, Gear, Home, Moon, Sun } from "radix-icons-svelte";
</script>

<div class="flex flex-col gap-2.5">
	<Button variant="outline" size="icon">
		<Home class="h-[20px] w-[20px] rotate-0 scale-100 transition-all" />
	</Button>
	<Button variant="outline" size="icon">
		<Camera class="h-[20px] w-[20px] rotate-0 scale-100 transition-all" />
	</Button>
</div>
<div class="flex flex-1"></div>
<div class="flex flex-col gap-2.5">
	<Button variant="outline" size="icon">
		<Gear class="h-[20px] w-[20px]" />
	</Button>
	<Button on:click={toggleMode} variant="outline" size="icon">
		<Sun class="h-[20px] w-[20px] rotate-0 scale-100 text-orange-500 transition-all dark:-rotate-90 dark:scale-0" />
		<Moon class="absolute h-[20px] w-[20px] rotate-90 scale-0 text-blue-400 transition-all dark:rotate-0 dark:scale-100" />
		<span class="sr-only">Toggle theme</span>
	</Button>
</div>
