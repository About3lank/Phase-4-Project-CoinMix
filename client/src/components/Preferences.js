import { useState, useEffect } from 'react'
import Question from './Question.js'

function Preferences({ currentUser, setCurrentUser, userPreferences, setUserPreferences }) {

    return(
        <div id="preferences-container">
            <form id="preference-form">
                {userPreferences.map( (pref) => <Question pref={pref} />)}
            <input type="submit" value="SUBMIT" />
        </form>
        </div>

    )
}

export default Preferences;