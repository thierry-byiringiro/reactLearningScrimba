import { useState } from "react";

function MyApp() {
    let [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }
    const mult = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0)
    }
    function MyButton() {
        return <><button type="button" onClick={add}>Awake me 😴😴</button></>
    }
    return (
        <>
            <h1>Welcome to my app my pipo</h1>
            <MyButton />
            <h2>
                {count}
            </h2>
        </>);
}
export default MyApp;