import { useState } from "react"

// JQuery ile 0 -> 1 olarak set edildiginde tum sayfa render edilir ,
// fakat React ile sadece degistirdigimiz kisim render edilir !!!


export default function Counter() {
    const [count, setCount] = useState(0)

    const decrease = () => setCount(count - 1)


    const increase = () => setCount(count + 1)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={decrease}>Decrease</button>
            <button onClick={increase}>Increase</button>
        </>
    )
}