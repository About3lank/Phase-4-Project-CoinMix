import Preferences from './Preferences.js'
import Portfolio from './Portfolio.js'

function AuthenticatedApp({ coins, currentUser }) {



    return(
        <>
          <Portfolio 
            currentUser={currentUser}
            coins={coins} />
          {/* <Preferences currentUser={currentUser} setCurrentUser={setCurrentUser}/> : <></>} */}
        </>
      )
}

export default AuthenticatedApp;