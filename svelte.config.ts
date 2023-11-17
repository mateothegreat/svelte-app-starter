import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
	// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess({}),
	onwarn: (warning) => {
		if (warning.code === "css-unused-selector") {
			return;
		}
	}
};
