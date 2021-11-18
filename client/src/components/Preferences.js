import { useState, useEffect } from 'react'
import Question from './Question.js'

function Preferences({ currentUser, setCurrentUser }) {

    const [ user_preferences, setUserPreferences ] = useState([])

    

    useEffect( () => {
        fetch("/user_preferences")
        .then(r => r.json())
        .then(data => setUserPreferences(data.filter( (u) => (u.user_id === currentUser.id))))
    }, [])



    return(
        <form id="preference-form">
            {user_preferences.map( (pref) => <Question pref={pref} />)}
            <input type="submit" >SUBMIT</input>
        </form>
    )
}

export default Preferences;