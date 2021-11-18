import { useState, useEffect } from 'react'
import Question from './Question.js'

function Preferences({ currentUser, preferences }) {

    // console.log("CURRENT USER :", currentUser)
    // console.log("CURRENT USER PREFERENCES: ", currentUser.user_preferences)

    let user_preferences = currentUser.user_preferences
    // console.log("USER PREFERENCES: ", user_preferences)
    return(
        <div id="preferences-container">
            <form id="preference-form">
                {user_preferences.map( (user_preference) => 
                    <Question 
                        user_preference={user_preference}
                        preferences={preferences} />)}
            <input type="submit" value="SUBMIT" />
        </form>
        </div>

    )
}

export default Preferences;