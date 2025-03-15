import { render } from "preact";

import "./style.css";

export function App() {
	return (
		<div className={"main"}>
			<div className={"main-text"}>Get Started building Vite-powered Preact Apps</div>
		</div>
	);
}

render(<App />, document.getElementById("app"));
