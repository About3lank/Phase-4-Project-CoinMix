import React from 'react'
import Coin from './Coin'
import SortButton from './SortButton'
import { useState } from 'react'
import kinderSorter from '../functions/kinderSorter'
import userOwnsCoin from '../functions/userOwnsCoin'

function CoinMarket({ currentUser, coins }) {

    const [ sortedBy, setSortedBy ] = useState(null)
    const [ ascending, setAscending ] = useState(true)

    // console.log(coins)
    // console.log("CURRENT USER @COINMARKET: ", currentUser)

    coins = coins.map( (coin) => ({
        ...coin,
        owned: userOwnsCoin(coin, currentUser)
    }))

    if (sortedBy) {
        coins.sort(kinderSorter(sortedBy, ascending))
    }

    // console.log("COINS @CoinMarket: ", coins)

    return (
        <div id="coinmarket-container">
            <h1 className="marketplace-title">COIN MARKET</h1>
            <table id="market-header" className="coin-table market-table">
                <tr>
                    <th className="col-medium"><SortButton item="owned" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Owned?</th>

                    <th className="col-medium"><SortButton item="name" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending} />Name</th>
                    
                    <th className="col-medbig"><SortButton item="price" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending} />Price</th>
                    
                    <th className="col-medbig"><SortButton item="risk_level" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending} />{"Risk (<=30)"}</th>
                    
                    <th className="col-large"><SortButton item="volume" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending} />Volume</th>
                    
                    <th className="col-medbig"><SortButton item="market_cap" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending} />Market Cap</th>
                </tr>
            </table>
            <div id="coinmarket-data">
                <table className="market-table coin-table">
                    {coins.map( (c) => 
                        <Coin 
                            thisCoin={c}
                            coins={coins}
                            currentUser={currentUser}
                            mode={"market"} />)}
                </table>
            </div>

        </div>

    )
}

export default CoinMarket
