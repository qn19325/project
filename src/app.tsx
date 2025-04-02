import "./app.css";

export default function App() {
    const handleCapture = () => {
        console.log("Capture");
    };

    return (
        <main>
            <h1>Project</h1>
            <p>Scan documents and Interpret the content.</p>
            <button class="increment" onClick={handleCapture} type="button">
                Capture
            </button>
        </main>
    );
}
