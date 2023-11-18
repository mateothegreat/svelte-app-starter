import Cameras from "./cameras/Cameras.svelte";
import Home from "./home/Home.svelte";
import Locations from "./locations/Location.svelte";
import Settings from "./settings/Settings.svelte";

export default {
	"/": Home,
	"/cameras": Cameras,
	"/locations": Locations,
	"/settings": Settings
};
