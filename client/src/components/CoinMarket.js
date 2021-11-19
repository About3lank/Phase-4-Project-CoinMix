import React from 'react'
import Coin from './Coin'
import SortButton from './SortButton'
import { useState } from 'react'
import kinderSorter from '../functions/kinderSorter'
import userOwnsCoin from '../functions/userOwnsCoin'

function CoinMarket({ currentUser, coins, cryptos, mutatedCryptos, setCryptos }) {

    const [ sortedBy, setSortedBy ] = useState(null)
    const [ ascending, setAscending ] = useState(true)

    console.log("CRYPTOS @COINMARKET: ", cryptos)
    // console.log("CURRENT USER @COINMARKET: ", currentUser)

    console.log("CRYPTOS @CoinMarket: ", cryptos)

    // setCryptos(newCryptos)

    if (sortedBy) {
        mutatedCryptos.sort(kinderSorter(sortedBy, ascending))
    }

    // console.log("COINS @CoinMarket: ", coins)

    return (
        <div id="coinmarket-container">
            <h1 className="marketplace-title">COIN MARKET</h1>
            <table id="market-header" className="coin-table market-table">
                <tr>
                    <th className="col-medium"><SortButton item="owned" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Owned?</th>

                    <th className="col-medium"><SortButton item="symbol" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending} />Symbol</th>

                    <th className="col-medium"><SortButton item="name" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending} />Name</th>
                    
                    <th className="col-medbig"><SortButton item="priceUsd" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending} />Price</th>
                    
                    <th className="col-medbig"><SortButton item="risk_level" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending} />{"Risk (<=30)"}</th>
                    
                    <th className="col-large"><SortButton item="volumeUsd24Hr" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending} />Volume(/24h)</th>
                    
                    <th className="col-medbig"><SortButton item="marketCapUsd" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending} />Market Cap</th>
                </tr>
            </table>
            <div id="coinmarket-data">
                {/* <table className="market-table coin-table">
                    {coins.map( (c) => 
                        <Coin 
                            thisCoin={c}
                            coins={coins}
                            cryptos={cryptos}
                            currentUser={currentUser}
                            mode={"market"} />)}
                </table> */}
                                <table className="market-table coin-table">
                    {mutatedCryptos.map( (c) => 
                        <Coin 
                            thisCoin={c}
                            coins={coins}
                            cryptos={cryptos}
                            currentUser={currentUser}
                            mode={"market"} />)}
                </table>
            </div>

        </div>

    )
}

export default CoinMarket
