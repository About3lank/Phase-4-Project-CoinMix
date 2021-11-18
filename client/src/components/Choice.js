import React from 'react'

function Choice({ choice, value, setValue }) {

    function clickHandler(value) {
        setValue(value)
    }

    return (
        <td 
            className={`choice${value===choice.value? " selected" : ""}`}
            onClick={() => clickHandler(choice.value)} >
                {choice.text}
        </td>)
    
}

export default Choice
