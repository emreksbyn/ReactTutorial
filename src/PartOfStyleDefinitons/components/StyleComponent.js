import React from 'react'
import A from './A'
import B from './B'

export default function StyleComponent() {
    return (
        <>
            <div style={{ color: 'blue', backgroundColor: 'antiquewhite', paddingTop: 50 }}>
                Style deneme
            </div>
            <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
            </div>
            <A />
            <B />
        </>
    )
}
