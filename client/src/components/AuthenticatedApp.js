import Preferences from './Preferences.js'
import Portfolio from './Portfolio.js'
import Marketplace from './Marketplace.js';

function AuthenticatedApp({ coins, currentUser, preferences }) {

    console.log("CURRENT_USER @AuthApp.js: ", currentUser)

    return(
        <>
          <Marketplace 
            currentUser={currentUser}
            coins={coins} />
          <Preferences
            currentUser={currentUser}
            preferences={preferences} />
        </> 
      )
}

export default AuthenticatedApp;