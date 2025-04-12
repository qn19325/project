import { createSignal, createResource, Show } from "solid-js";
import "./app.css";

const fetchUser = async (id: number) => {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    return response.json();
};

export default function App() {
    const [userId, setUserId] = createSignal(0);
    const [user] = createResource(userId, fetchUser);

    return (
        <main>
            <h1>Project</h1>
            <p>Scan documents and Interpret the content.</p>
            <input
                type="number"
                min="1"
                placeholder="Enter Numeric Id"
                onInput={(e) => setUserId(Number(e.currentTarget.value))}
            />
            <Show when={user}>
                <div>{JSON.stringify(user())}</div>
            </Show>
        </main>
    );
}
