import React, { useEffect, useState } from 'react'

export default function ComponentUnmount() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("Component mount edildi!");
        const interval = setInterval(() => {
            setNumber((n) => n + 1);
        }, 677)

        return () => {
            clearInterval(interval);
            console.log("Component unmount edildi.");
        }
    }, [])

    useEffect(() => {
        console.log("number state guncellendi!");
    }, [number])

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
        </div>
    )
}
