import React from 'react'

function SortButton({ item, sortedBy, setSortedBy, ascending, setAscending }) {

    function sortHandler() {
        // console.log("clicked...")
        // console.log("ITEM: ", item)
        if (sortedBy===item) {
            setAscending(!ascending)
        } else {
            setSortedBy(item)
            item==="name" || item==="symbol"? setAscending(true):setAscending(false)
        }
    }

    return (
        <button className={`button${sortedBy===item? " selected":""}`} onClick={sortHandler}>{item===sortedBy? ascending? (item==="name" || item==="symbol")? "v":"v":"^":"^"}</button>
    )
}

export default SortButton
