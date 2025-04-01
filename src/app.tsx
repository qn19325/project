import { createSignal } from "solid-js";
import "./app.css";

export default function App() {
    const [capture, setCapture] = createSignal(0);

    return (
        <main>
            <h1>Project</h1>
            <p>Function will be an application that can scan documents and interpret the content.</p>
            <button class="increment" onClick={() => setCapture(capture() + 1)} type="button">
                Capture: {capture()}
            </button>
        </main>
    );
}
