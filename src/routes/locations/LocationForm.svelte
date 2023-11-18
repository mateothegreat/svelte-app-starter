<script lang="ts">
	import * as Form from "$lib/components/ui/form";
	import type { SuperValidated } from "sveltekit-superforms";
	import { locationSchema } from "./Location";

	export let form: SuperValidated<typeof locationSchema>;
</script>

<Form.Root method="POST" {form} schema={locationSchema} let:config>
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>Location Name</Form.Label>
			<Form.Input />
			<Form.Description>This is the display name for this location.</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</Form.Root>
