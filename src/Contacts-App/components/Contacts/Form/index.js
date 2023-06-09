import { useEffect, useState } from 'react'

const initialFormValues = { full_name: "", phone_number: "" };
export default function Form({ addContact, contacts }) {

    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts])

    const onChangeInput = (e) => {
        // console.log(e.target.name, e.target.value);
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        // form elementinin default islemini engeller.
        e.preventDefault();

        if (form.full_name === '' || form.phone_number === '') {
            return false;
        }

        addContact([...contacts, form])

    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name='full_name' placeholder='Full Name' value={form.full_name} onChange={onChangeInput} />
            </div>

            <div>
                <input name='phone_number' placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput} />
            </div>

            <div className='btn'>
                <button>Add</button>
            </div>
        </form>
    )
}
