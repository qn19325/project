import "./app.css";

const fetchUser = async (id: number) => {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    return response.json();
};

export default function App() {
    const handleCapture = () => {
        fetchUser(1).then((response) => console.log(response));
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
