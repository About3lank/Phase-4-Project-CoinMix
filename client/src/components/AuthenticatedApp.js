import Preferences from './Preferences.js'
import Portfolio from './Portfolio.js'

function AuthenticatedApp({ coins, currentUser, userPreferences, setUserPreferences }) {

    console.log("CURRENT_USER @AuthApp.js: ", currentUser)

    return(
        <>
          {/* <Portfolio 
            currentUser={currentUser}
            coins={coins} /> */}
          <Preferences
            currentUser={currentUser} 
            userPreferences={userPreferences}
            setUserPreferences={setUserPreferences} />
        </>
      )
}

export default AuthenticatedApp;