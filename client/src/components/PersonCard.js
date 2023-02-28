import React, { useState } from 'react'

const PersonCard = (props) => {

    const { firstName, lastName, age, hairColor } = props
    
    const [personAge, setPersonAge] = useState(age)

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {personAge}</p>
            <p>Hair Color: <span style={{ color: hairColor }}>{hairColor.charAt(0).toUpperCase() + hairColor.slice(1)}</span></p>
            <button onClick={(e) => setPersonAge(personAge + 1)}>Birthday!</button>
        </div>
    )
}

export default PersonCard;