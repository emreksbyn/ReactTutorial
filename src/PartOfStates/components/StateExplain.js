import React from 'react'
import { useState } from 'react'


export default function StateExplain() {
    const [name, setName] = useState('Emre');
    const [age, setAge] = useState(28);
    const [friends, setFriends] = useState(["Ahmet", "Murat"]);
    const [address, setAddress] = useState({ title: "Istanbul", zip: 6752 })

    console.log(name, age);

    return (
        <>
            <h1>Merhaba {name}!</h1>
            <h2>{age}</h2>
            <button onClick={() => setName('Ali')}>Chnage name</button>
            <button onClick={() => setAge(29)}>Chnage age</button>

            <hr /><br />

            <h2>Friends</h2>
            {
                friends.map((friend, index) => (
                    <div key={index}>{friend}</div>
                ))
            }
            <button onClick={() => setFriends([...friends, "Emre"])}>Add new friend</button>

            <hr /><br />

            <h2>Address</h2>
            <div>{address.title} {address.zip}</div>
            <button onClick={() => setAddress({ ...address, title: "Zonguldak" })}>Change Address</button>
        </>
    )
}
