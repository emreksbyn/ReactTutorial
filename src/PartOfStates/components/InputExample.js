import { useState } from 'react'

export default function InputExample() {
    // const [name, setName] = useState('Emre');
    // const [surname, setSurname] = useState('Kısaboyun');

    // const changeInputValue = (event) => {
    //     if (event.target.name === "name") {
    //         setName(event.target.value)
    //     } else
    //         setSurname(event.target.value)
    // }

    const [form, setForm] = useState({ name: "", surname: "" });

    const changeInputValue = (event) => {
        console.log({ ...form });
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    return (
        <>
            Name : <br />
            <input name='name' value={form.name} onChange={changeInputValue} />
            <br />
            <br />
            Surname : <br />
            <input name='surname' value={form.surname} onChange={changeInputValue} />
            <br />
            <br />
            {form.name} {form.surname}
        </>
    )
}
