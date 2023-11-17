<script lang="ts">
	import { Button } from "$components/ui/button";
	import { buttonVariants } from "$lib/components/ui/button";
	import { Label } from "$lib/components/ui/label";
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { Moon, Sun } from "radix-icons-svelte";
	import * as Dialog from "../app/lib/components/ui/dialog";
	import { Input } from "../app/lib/components/ui/input";
	import "./app.postcss";
</script>

<Button on:click={toggleMode} variant="outline" size="icon">
	<Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
	<Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
	<span class="sr-only">Toggle theme</span>
</Button>
<ModeWatcher />
<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: "outline" })}>Edit Profile</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Edit profile</Dialog.Title>
			<Dialog.Description>Make changes to your profile here. Click save when you're done.</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4 py-4">
			<div class="grid grid-cols-4 items-center gap-4">
				<Label class="text-right">Name</Label>
				<Input id="name" value="Pedro Duarte" class="col-span-3" />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label class="text-right">Username</Label>
				<Input id="username" value="@peduarte" class="col-span-3" />
			</div>
		</div>
		<Dialog.Footer>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
<Button variant="outline">Cancel</Button>
<Button>Deploy</Button>

<style global lang="postcss">
	@tailwind utilities;
	@tailwind components;
	@tailwind base;
</style>
