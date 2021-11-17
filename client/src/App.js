import logo from './logo.svg';
import './App.css';
import Preferences from './components/Preferences.js';

import { useState } from 'react'


function App() {

  // const gS = new Galactic()
  // const [testState, setTestState] = useState(true)
  // gS.update("testState", testState)
  // gS.update("setTestState", setTestState)


  return(
    <>
      <Preferences />
    </>

  )

}

export default App;


