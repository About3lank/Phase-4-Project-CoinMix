import Preferences from './Preferences.js'
import Portfolio from './Portfolio.js'
import Marketplace from './Marketplace.js';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

function AuthenticatedApp({ coins, cryptos, mutatedCryptos, setCryptos, currentUser, setCurrentUser, preferences, setAuthChecked }) {

    const handleLogout = () => {
      fetch(`/logout`, {
        method: 'DELETE'
      })
        .then(res => {
          if (res.ok) {
            setCurrentUser(null)
            setAuthChecked(false)
          }
        })
    }
    return(
        <>
          <nav>
            <span>
              <NavLink to= "/user_preferences"> Preferences </NavLink>
              <NavLink to="/user_coins">Coins</NavLink>
            </span>
            <span> Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button> </span>
          </nav>
          <Switch>
            <Route path="/user_coins">
                 <Marketplace 
                 currentUser={currentUser}
                 coins={coins}
                 cryptos={cryptos}
                 mutatedCryptos={mutatedCryptos}
                 setCryptos={setCryptos} />
             </Route>
             <Route path="/user_preferences">
                  <Preferences
                    currentUser={currentUser}
                    preferences={preferences} />
            </Route>
      </Switch>
        </> 
      )
}

export default AuthenticatedApp;