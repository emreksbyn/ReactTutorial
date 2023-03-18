import { useState, useEffect } from "react"

/*
    Burada useEffect in componenDidMount() ve componentDidUpdate() olarak kullanimi ele alindi
*/

export default function UseEffectExplain() {
    // hook lar component lerin yukari kisimlarinda kullanilmalidir.
    // kesinlikle hic bir sekilde if blogunun icinde kullanilmamalidir.

    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Emre");

    // component uzerindeki herhangi bir state guncellendigi anda useEffect ile bu durumu yakalayabiliyorum.
    // useEffect(() => {
    //     console.log("State guncellendi.");
    // })

    // 2. parametre olarak verdigimiz array dependency array olarak tanimlanir.
    /* 
        useEffect() i componentDidMount() mantiginda kullanmak icin yani bir componentin ilk defa cagirildiginda
        kullanilan metot mantiginda kullanmak icin bu array bos gonderilir.
    */
    useEffect(() => {
        console.log("Component mount edildi.");
    }, [])

    // Ozellikle belirttigimiz state(ler) guncellendiginde tetiklemek istedigim metot.
    // useEffect(() => {
    //     console.log("number veya name state guncellendi.");
    // }, [number, name])

    useEffect(() => {
        console.log("number state guncellendi.");
    }, [number])

    useEffect(() => {
        console.log("name state guncellendi.");
    }, [name])


    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>

            <hr />

            <h1>{name}</h1>
            <button onClick={() => setName(name + "e")}>Click</button>

        </>
    )
}