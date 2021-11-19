import React from 'react'
import Portfolio from './Portfolio'
import CoinMarket from './CoinMarket'

function Marketplace({ currentUser, coins }) {
    return (
        <div id="marketplace-container">
            <Portfolio 
                currentUser={currentUser}
                coins={coins} />
            <div id="marketplace-row2">
                <div id="test-div" className="flex">
                    <p>testtttttttttttttttttttttttttttttttttttttttt</p>
                </div>

                <CoinMarket
                    currentUser={currentUser}
                    coins={coins} />

            </div>


        </div>
    )
}

export default Marketplace
