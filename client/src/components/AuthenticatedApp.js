import Preferences from './Preferences.js'
import Portfolio from './Portfolio.js'

function AuthenticatedApp({ coins, currentUser, preferences }) {

    // console.log("CURRENT_USER @AuthApp.js: ", currentUser)

    return(
        <>
          <Portfolio 
            currentUser={currentUser}
            coins={coins} />
          {/* <Preferences
            currentUser={currentUser}
            preferences={preferences} />*/}
        </> 
      )
}

export default AuthenticatedApp;