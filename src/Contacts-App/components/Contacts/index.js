import { useEffect, useState } from 'react'

import './styles.css'

import Form from './Form'
import List from './List'

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            full_name: "Emre",
            phone_number: "123123"
        },
        {
            full_name: "Ali",
            phone_number: "456456"
        },
        {
            full_name: "Veli",
            phone_number: "789789"
        }
    ]);

    // contacts degistigi anda bunu logla dedik
    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div id='container'>
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
