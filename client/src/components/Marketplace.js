import React from 'react'
import Portfolio from './Portfolio'
import CoinMarket from './CoinMarket'
// import PieChart from './PieChart'

function Marketplace({ currentUser, coins, cryptos, mutatedCryptos, setCryptos }) {
    return (
        <div id="marketplace-container">
            <Portfolio 
                currentUser={currentUser}
                coins={coins}
                mutatedCryptos={mutatedCryptos} />
            <div id="marketplace-row2">
                <div id="test-div" className="flex">
                    <p>testtttttttttttttttttttttttttttttttttttttttt</p>
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
