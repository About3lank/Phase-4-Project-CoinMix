import { useState, useEffect } from 'react'
import Question from './Question.js'

function Preferences() {

    const [ preferences, setPreferences ] = useState([])

    useEffect( () => {
        fetch("/preferences")
        .then(r => r.json())
        .then(data => setPreferences(data))
    }, [])

    // console.log("PREFERENCES @Preferences.js ~after_fetch: ", preferences)

    return(
        <form id="preference-form">
            {preferences.map( (pref) => <Question pref={pref} />)}
        </form>
    )
}

export default Preferences;