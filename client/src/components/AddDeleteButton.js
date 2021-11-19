import React from 'react'

function AddDeleteButton({ mode,  }) {
    return (
        <div>
            <button className={`${mode==="market"? "add" : "delete" } button`}>{mode==="market"? "+" : "X"}</button>
        </div>
    )
}

export default AddDeleteButton
