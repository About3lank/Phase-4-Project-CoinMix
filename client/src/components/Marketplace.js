import React from 'react'
import Portfolio from './Portfolio'
import CoinMarket from './CoinMarket'
import { Pie } from 'react-chartjs-2'
import userOwnsCoin from '../functions/userOwnsCoin'
import riskToRgbHex from '../functions/riskToRgbHex'


// import PieChart from './PieChart'

function Marketplace({ currentUser, coins, cryptos, mutatedCryptos, setCryptos }) {

    function renderPieChart() {

        const userCoins = mutatedCryptos.filter((coin) => userOwnsCoin(coin, currentUser))
        console.log("USER COINS: ", userCoins)
        let labels = userCoins.map((coin) => coin.name)
        let backgroundColor = userCoins.map((coin) => riskToRgbHex(coin.risk_level, 30))
        let hoverColor = userCoins.map(() => "#FFFFFF")
        let totalEquity = 0
        userCoins.forEach((coin) => totalEquity+=coin.equity)
        let equityData = userCoins.map((coin) => Math.floor(100*coin.equity/totalEquity))
        console.log("EQUITY: ", equityData)
        console.log("BG COLOR: ", backgroundColor)
        const state = {
            labels: labels,
            datasets: [
              {
                label: 'Cryptocurrency Holdings by Equity/Risk',
                backgroundColor: backgroundColor,
                hoverBackgroundColor: hoverColor,
                data: equityData
              }
            ]
          }
          
            return (
              <div>
                <Pie
                  data={state}
                  options={{
                    title:{
                      display:true,
                      text:'Breakdown of estimated risk levels given your current portfolio',
                      fontSize:40
                    },
                    legend:{
                      display:true,
                      position:'right'
                    }
                  }}
                />
        
                
              </div>
            )
             
    }



    return (
        <div id="marketplace-container">
            <Portfolio 
                currentUser={currentUser}
                coins={coins}
                mutatedCryptos={mutatedCryptos} />
            <div id="marketplace-row2">
                <div id="test-div" className="flex">
                    <h1>RISK EVALUATION</h1>
                    <div className="chart-container">
                        {renderPieChart()}
                    </div>

                </div>

                <CoinMarket
                    currentUser={currentUser}
                    coins={coins}
                    cryptos={cryptos}
                    mutatedCryptos={mutatedCryptos}
                    setCryptos={setCryptos} />

            </div>
            {/* <PieChart /> */}


        </div>
    )
}

export default Marketplace
