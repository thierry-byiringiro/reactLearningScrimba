import { useState } from "react";

function MyApp() {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }
    const sub = (e) => {
            setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }
    function MyButton() {
        return (
            <>
                <div className="myBut">

                    <button type="button" onClick={add}>Awake me 😴😴</button>
                    <button type="button" onClick={reset}>Make me sleep</button>
                    <button type="button" onClick={sub}>Make me more Lazy</button>
                </div>
            </>
        )
    }
    return (
        <>n
            <h1>Welcome to my app my pipo</h1>
            <MyButton />
            <h2>
                {count}
            </h2>
        </>);
}
export default MyApp;