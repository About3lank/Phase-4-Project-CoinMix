import logo from './logo.svg';
import './App.css';


import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import AuthenticatedApp from './components/AuthenticatedApp.js'
import UnauthenticatedApp from './components/UnauthenticatedApp.js'


function App() {


  const [ currentUser, setCurrentUser ] = useState(null)
  const [ authChecked, setAuthChecked ] = useState(true)
  const [ coins, setCoins ] = useState([])

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
  }, [])


  // const gS = new Galactic()
  // const [testState, setTestState] = useState(true)
  // gS.update("testState", testState)
  // gS.update("setTestState", setTestState)


  if (!authChecked) { return <div></div>}

  return(
    
      <>
        {currentUser? 
          
          <AuthenticatedApp
            currentUser={currentUser}
            coins={coins} />
          :
          <UnauthenticatedApp/>
        
        }
      </>
      // {currentUser? <AuthenticatedApp currentUser={currentUser} setCurrentUser={setCurrentUser}/> : <></>}
    

  )

}

export default App;


