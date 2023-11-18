<script lang="ts">
	import LeftToolbar from "$components/layout/left-toolbar/LeftToolbar.svelte";
	import { ModeWatcher } from "mode-watcher";
	import Router from "svelte-spa-router";
	import "./app.postcss";
	import routes from "./routes/routes";
</script>

<div class="absolute flex h-full w-full bg-[#111315]">
	<LeftToolbar />
	<div class="flex-1 justify-center p-2 align-middle">
		<Router {routes} />
	</div>
	<div class="flex"></div>
</div>

<ModeWatcher />

<style global lang="postcss">
	@tailwind utilities;
	@tailwind components;
	@tailwind base;
</style>
