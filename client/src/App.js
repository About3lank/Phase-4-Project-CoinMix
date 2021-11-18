import logo from './logo.svg';
import './App.css';


import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AuthenticatedApp from './components/AuthenticatedApp.js'
import UnauthenticatedApp from './components/UnauthenticatedApp.js'


function App() {


  const [ currentUser, setCurrentUser ] = useState(null)
  const [ authChecked, setAuthChecked ] = useState(true)
  const [ coins, setCoins ] = useState([])
  const [ userPreferences, setUserPreferences ] = useState([])

  function randomizer(arr) {
    let item = arr[Math.floor(Math.random() * arr.length)]
    return item
  }

  useEffect( () => {
    fetch("/users")
    .then(r => r.json())
    .then(data => setCurrentUser(randomizer(data)))

    fetch("/coins")
    .then(r => r.json())
    .then(data => setCoins(data))

    fetch("/user_preferences")
    .then(r => r.json())
    // .then(data => setUserPreferences(data.filter( (u) => (u.user_id === currentUser.id))))
    .then(data => setUserPreferences(data.filter( (u) => (u.user_id === 10))))
  }, [])

  console.log("CURRENT_USER @App.js: ", currentUser)


  // const gS = new Galactic()
  // const [testState, setTestState] = useState(true)
  // gS.update("testState", testState)
  // gS.update("setTestState", setTestState)


  if (!authChecked) { return <div></div>}

  return(
    
      <Router>
        <Routes>
          <Route path="/" element= {  
        true?
          
          <AuthenticatedApp
            currentUser={currentUser}
            coins={coins}
            userPreferences={userPreferences}
            setUserPreferences={setUserPreferences} />
          :
          <UnauthenticatedApp/>
        
        }/>
     
        </Routes>
        </Router>

      // {currentUser? <AuthenticatedApp currentUser={currentUser} setCurrentUser={setCurrentUser}/> : <></>}
    

  )

}

export default App;


