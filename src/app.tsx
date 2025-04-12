import { createSignal, createResource } from "solid-js";
import "./app.css";

const fetchUser = async (id: number): Promise<string> => {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    return response.json();
};

const convertResponse = (response: string): string => {
    const split = response.split(",");
    const join = split.join("\n");
    return join;
};

export default function App() {
    const [userId, setUserId] = createSignal<number>();
    const [user] = createResource(userId, fetchUser);
    const [val, setVal] = createSignal("");

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
            <button onClick={() => setVal(convertResponse(JSON.stringify(user())))}>Set Value</button>
            <div>{val()}</div>
        </main>
    );
}
