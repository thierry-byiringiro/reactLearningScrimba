import { useState } from "react";

function MyButton({count,onclick}) {
    return (
        <>
            <div className="myBut">
                <button type="button" onClick={onclick}>Clicked {count} time(s)</button>
            </div>
        </>
    )
}

function MyApp() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>Welcome to my app my pipo</h1>
            <MyButton count={count} onclick={increment}/><br />
            <MyButton count={count} onclick={increment} />
        </>);
}
export default MyApp;