import { useState } from "react";

function MyApp() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    function MyButton() {
        return (
            <>
                <div className="myBut">
                    <button type="button" onClick={increment}>Button 1</button>
                    <button type="button" onClick={increment}>Button 2</button>
                </div>
            </>
        )
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