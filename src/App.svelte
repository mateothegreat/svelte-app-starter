<script lang="ts">
	import { Button } from "$components/ui/button";
	import { buttonVariants } from "$lib/components/ui/button";
	import * as Dialog from "$lib/components/ui/dialog";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { ModeWatcher } from "mode-watcher";
	import "./app.postcss";
	import Header from "./lib/components/layout/Header.svelte";
	import LeftToolbar from "./lib/components/layout/LeftToolbar.svelte";
</script>

<div class="absolute flex h-full w-full flex-col bg-[#FAF9F9] dark:bg-[#111315]">
	<div class="w-full border-b dark:border-gray-800 dark:bg-[#1A1D1F]">
		<Header />
	</div>
	<div class="flex flex-1">
		<div class="border-1 flex flex-col border-r bg-white p-2 dark:border-gray-800 dark:bg-[#1A1D1F]">
			<LeftToolbar />
		</div>
		<div class="flex-1 justify-center p-2 align-middle">
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
		</div>
		<div class="flex"></div>
	</div>
</div>

<ModeWatcher />

<style global lang="postcss">
	@tailwind utilities;
	@tailwind components;
	@tailwind base;
</style>
