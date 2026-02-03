import { useState } from "react";

function MyApp() {
    let [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    function MyButton() {
        return <><button type="button" onClick={handleClick}>Awake me 😴😴</button></>
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