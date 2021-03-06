import { useState, useEffect } from 'react'
import Coin from './Coin.js'
import SortButton from './SortButton.js'
import kinderSorter from '../functions/kinderSorter.js'
import userOwnsCoin from '../functions/userOwnsCoin.js'

function Portfolio({ coins, mutatedCryptos, setCoins, currentUser }) {
    // console.log("CURRENT_USER @PORTFOLIO: ", currentUser)

    const userCoins = currentUser.user_coins
    const [ sortedBy, setSortedBy ] = useState(null)
    const [ ascending, setAscending ] = useState(true)

    // can we delete this if we serialize coins to include user_coins? do we want to?
    // let coinList = currentUser.user_coins.map( (c) => coins.find( z => z.id===c.coin_id))
    // coinList = coinList.map((coin) => ({
    //     ...coin, 
    //     amount: userCoins.filter((uc)=> (uc.coin_id===coin.id))[0].amount,
    //     equity: (userCoins.filter((uc)=> (uc.coin_id===coin.id))[0].amount)*coin.price/100,
    //     owned: userOwnsCoin(coin, currentUser)
    // }))
        
    // console.log("COIN LIST: ", coinList)

    // console.log("userCoins (after fetch): ", userCoins)
    // console.log("coins: ", coins)

    if (sortedBy) {
        mutatedCryptos.sort(kinderSorter(sortedBy, ascending))
    }

    return(
        <div id="portfolio-container">
            <h1 className="marketplace-title" >MY PORTFOLIO</h1>
            <table id="portfolio-title" className="coin-table portfolio-table">
                <tr className="portfolio-row">
                    {/* <th><SortButton key="amount" /> Amount</th>
                    <th><SortButton key="name" /> Name</th>
                    <th><SortButton key="price" /> Price</th>
                    <th><SortButton key="equity" /> Equity</th>
                    <th><SortButton key="risk_level" /> Risk Level</th>
                    <th><SortButton key="volume" /> Volume</th>
                    <th><SortButton key="market_cap" /> Market Cap</th> */}
                    <th className="portfolio-cell"><SortButton item="amount" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Amount</th>

                    <th className="portfolio-cell"><SortButton item="symbol" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Symbol</th>
                    
                    <th className="portfolio-cell"><SortButton item="name" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Name</th>
                    
                    <th className="portfolio-cell"><SortButton item="priceUsd" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Price</th>
                    
                    <th className="portfolio-cell"><SortButton item="equity" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Equity</th>
                    
                    <th className="portfolio-cell"><SortButton item="risk_level" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>{"Risk (<=30)"}</th>
                    
                    <th className="portfolio-cell"><SortButton item="volumeUsd24Hr" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Volume(/24h)</th>
                    
                    <th className="portfolio-cell"><SortButton item="marketCapUsd" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Market Cap</th>

                </tr>
                </table>
                <div id="portfolio-data">
                    <table className="coin-table portfolio-table" >
                    {mutatedCryptos.map( (c) => 
                        <Coin 
                            thisCoin={c}
                            coins={coins}
                            currentUser={currentUser}
                            mode={"portfolio"} />)}
                    </table>
                </div>

        </div>

    )
}

export default Portfolio;