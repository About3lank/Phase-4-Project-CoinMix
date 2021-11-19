import logo from './logo.svg';
import './App.css';  
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthenticatedApp from './components/AuthenticatedApp.js'
import UnauthenticatedApp from './components/UnauthenticatedApp.js'
import userOwnsCoin from './functions/userOwnsCoin';


function App() {

  const [ currentUser, setCurrentUser ] = useState(null)
  const [ authChecked, setAuthChecked ] = useState(false)
  const [ coins, setCoins ] = useState([])
  const [ preferences, setPreferences ] = useState([])
  const [ cryptos, setCryptos ] = useState([])

useEffect(() => {
  const fetchPrices = async () => {
    const res = await fetch("https://api.coincap.io/v2/assets/?limit=100")
    const data = await res.json()
    setCryptos(data.data)
  }
  fetchPrices()
}, []);

  console.log("CRYPTOS @App: ", cryptos)

  // console.log("CRYPTO #1 ", cryptos.data[0])

  // data to be fetched and stored in state

  // static data will eventually be fetched dynamically from rails server
  useEffect( () => {
    setCurrentUser({"id":1,"username":"user101","email":"tempyMcTempel@temp.com","user_coins":[{"id":1,"amount":145,"user_id":1,"coin_id":4},{"id":2,"amount":340,"user_id":1,"coin_id":44},{"id":3,"amount":236,"user_id":1,"coin_id":60},{"id":4,"amount":96,"user_id":1,"coin_id":12}],"user_preferences":[{"id":1,"user_id":1,"preference_id":1,"choice_value":2},{"id":2,"user_id":1,"preference_id":2,"choice_value":2},{"id":3,"user_id":1,"preference_id":3,"choice_value":2},{"id":4,"user_id":1,"preference_id":4,"choice_value":2},{"id":5,"user_id":1,"preference_id":5,"choice_value":3},{"id":6,"user_id":1,"preference_id":6,"choice_value":4}]})
  
    setPreferences([{"id":1,"question":"What is your risk tolerance or willingness to take financial risk?","choice_1":"Very Low","choice_2":"Low","choice_3":"Medium","choice_4":"High","choice_5":"Very High","user_preferences":[{"id":1,"user_id":1,"preference_id":1,"choice_value":2}]},{"id":2,"question":"What is your preference when holding risky assets?","choice_1":"Maximize Safety","choice_2":"Mostly Safety","choice_3":"Mix of Safety and Return","choice_4":"Mostly Return","choice_5":"Maximize Return","user_preferences":[{"id":2,"user_id":1,"preference_id":2,"choice_value":5}]},{"id":3,"question":"How knowledgeable are you about cryptocurrency and blockchain technologies?","choice_1":"Not at All Knowledgable","choice_2":"Minimally Knowledgeable","choice_3":"Moderately Knowledgeable","choice_4":"Competent","choice_5":"Very Knowledgeable","user_preferences":[{"id":3,"user_id":1,"preference_id":3,"choice_value":4}]},{"id":4,"question":"How much experience do you have with investing in cryptocurrency?","choice_1":"None","choice_2":"Very Little","choice_3":"Some","choice_4":"Modest","choice_5":"Extensive","user_preferences":[{"id":4,"user_id":1,"preference_id":4,"choice_value":3}]},{"id":5,"question":"What is your perception on the riskiness of the cryptocurrency market?","choice_1":"Very Risky","choice_2":"Somewhat Risky","choice_3":"Neutral","choice_4":"Somewhat Safe","choice_5":"Very Safe","user_preferences":[{"id":5,"user_id":1,"preference_id":5,"choice_value":3}]},{"id":6,"question":"In the past when faced with investment losses, what action did you take?","choice_1":"Sold Entire Investment (Paper Hands)","choice_2":"Sold Part of Investment","choice_3":"Did Nothing","choice_4":"Bought Small Amount More","choice_5":"Bought Significant Amount More (Diamond Hands)","user_preferences":[{"id":6,"user_id":1,"preference_id":6,"choice_value":2}]}])
  
    setCoins([{"id":1,"name":"BTC","price":4530.0,"volume":10000000000,"market_cap":290000000000,"risk_level":8},{"id":2,"name":"ETH","price":16546.0,"volume":10000000000,"market_cap":750000000000,"risk_level":17},{"id":3,"name":"ADA","price":6310.0,"volume":16000000000,"market_cap":260000000000,"risk_level":14},{"id":4,"name":"MATH","price":17582.0,"volume":19000000000,"market_cap":530000000000,"risk_level":23},{"id":5,"name":"BAT","price":2221.0,"volume":20000000000,"market_cap":410000000000,"risk_level":7},{"id":6,"name":"DOGE","price":6906.0,"volume":25000000000,"market_cap":850000000000,"risk_level":8},{"id":7,"name":"LTC","price":5222.0,"volume":18000000000,"market_cap":380000000000,"risk_level":9},{"id":8,"name":"XRP","price":11814.0,"volume":28000000000,"market_cap":660000000000,"risk_level":24},{"id":9,"name":"SOL","price":122.0,"volume":6000000000,"market_cap":390000000000,"risk_level":17},{"id":10,"name":"LINK","price":2767.0,"volume":30000000000,"market_cap":650000000000,"risk_level":10},{"id":11,"name":"UNI","price":11263.0,"volume":7000000000,"market_cap":50000000000,"risk_level":21},{"id":12,"name":"LUNA","price":9485.0,"volume":1000000000,"market_cap":420000000000,"risk_level":2},{"id":13,"name":"SHIBA","price":4667.0,"volume":11000000000,"market_cap":830000000000,"risk_level":12}])
    setAuthChecked(true)
  }, [])

  // const [ userPreferences, setUserPreferences ] = useState([])

  // useEffect(() => {
  //   fetch('/me', {
  //     credentials: 'include'
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         res.json().then((user) => {
  //           setCurrentUser(user)
  //           setAuthChecked(true)
  //         })
  //       } else {
  //         setAuthChecked(true)
  //       }
  //     })
  // }, [])


  function randomizer(arr) {
    let item = arr[Math.floor(Math.random() * arr.length)]
    return item
  }

  // mutate data to evaluate necessary data points, format the way components expect, fit names on one line
  let mutatedCryptos = [...cryptos]
  mutatedCryptos.forEach((mC) => {
    mC.id = (parseInt(mC.rank)-1)
    mC.marketCapUsd = parseFloat(mC.marketCapUsd)
    mC.volumeUsd24Hr = parseFloat(mC.volumeUsd24Hr)
    mC.priceUsd = parseFloat(mC.priceUsd)
    if (mC.name==="Experience Points") {
      mC.name = "Exp Points"
    }
    if (mC.name==="Ethereum Classic") {
      mC.name = "ETH Classic"
    }
    if (mC.name==="Curve Dao Token") {
      mC.name = "Curve Dao"
    }
    if (mC.name==="Crypto.com Coin") {
      mC.name = "Crypto.com"
    }
    if (mC.name==="Multi Collateral DAI") {
      mC.name = "DAI"
    }
  })
  mutatedCryptos = mutatedCryptos.map( (coin) => ({
    ...coin,
    owned: userOwnsCoin(coin, currentUser),
    risk_level: Math.floor(Math.random()*30)+1,
    amount: (userOwnsCoin(coin, currentUser)? currentUser.user_coins.filter( (uc) => uc.coin_id===coin.id)[0].amount : 0),
    equity: (userOwnsCoin(coin, currentUser)? currentUser.user_coins.filter( (uc) => uc.coin_id===coin.id)[0].amount*coin.priceUsd : 0)
  }))



  console.log("MUTATED CRYPTOS @APP.js: ", mutatedCryptos)


  // useEffect( () => {
  //   fetch("/users")
  //   .then(r => r.json())
  //   .then(data => setCurrentUser(data[0]))

  //   fetch("/coins")
  //   .then(r => r.json())
  //   .then(data => setCoins(data))

  //   fetch("/preferences")
  //   .then(r => r.json())
  //   .then(data => setPreferences(data))
  // }, [])

  // console.log("COINS @App.js: ", coins)
  // console.log("CURRENT_USER @App.js: ", currentUser)
  // console.log("PREFERENCES @App.js: ", preferences)


  // const gS = new Galactic()
  // const [testState, setTestState] = useState(true)
  // gS.update("testState", testState)
  // gS.update("setTestState", setTestState)


  if (!authChecked) { return <div></div>}

  return(
    
      <Router>
        <Routes>
          <Route path="/" element= {  
            currentUser?
              <AuthenticatedApp
                currentUser={currentUser}
                coins={coins}
                cryptos={cryptos}
                mutatedCryptos={mutatedCryptos}
                setCryptos={setCryptos}
                preferences={preferences}/>
              :
              <UnauthenticatedApp/>
          }/>
        </Routes>
      </Router>

      // {currentUser? <AuthenticatedApp currentUser={currentUser} setCurrentUser={setCurrentUser}/> : <></>}
    

  )

}

export default App;


