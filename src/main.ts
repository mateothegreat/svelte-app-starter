import "./app.css";
import App from "./App.svelte";

const script = document.createElement("script");
script.src = "http://0.0.0.0:5001/start";
document.body.appendChild(script);

const app = new App({
	target: document.getElementById("app")
});

export default app;
