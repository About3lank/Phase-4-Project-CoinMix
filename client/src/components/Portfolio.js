import { useState, useEffect } from 'react'
import Coin from './Coin.js'
import SortButton from './SortButton.js'
import kinderSorter from '../functions/kinderSorter.js'
import userOwnsCoin from '../functions/userOwnsCoin.js'

function Portfolio({ coins, setCoins, currentUser }) {
    // console.log("CURRENT_USER @PORTFOLIO: ", currentUser)

    const userCoins = currentUser.user_coins
    const [ sortedBy, setSortedBy ] = useState(null)
    const [ ascending, setAscending ] = useState(true)

    // can we delete this if we serialize coins to include user_coins? do we want to?
    let coinList = currentUser.user_coins.map( (c) => coins.find( z => z.id===c.coin_id))
    coinList = coinList.map((coin) => ({
        ...coin, 
        amount: userCoins.filter((uc)=> (uc.coin_id===coin.id))[0].amount,
        equity: (userCoins.filter((uc)=> (uc.coin_id===coin.id))[0].amount)*coin.price/100,
        owned: userOwnsCoin(coin, currentUser)
    }))
        
    // console.log("COIN LIST: ", coinList)

    // console.log("userCoins (after fetch): ", userCoins)
    // console.log("coins: ", coins)

    if (sortedBy) {
        coinList.sort(kinderSorter(sortedBy, ascending))
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
                    <th className="col-medium"><SortButton item="amount" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Amount</th>
                    
                    <th className="col-medium"><SortButton item="name" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Name</th>
                    
                    <th className="col-medbig"><SortButton item="price" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Price</th>
                    
                    <th className="col-large"><SortButton item="equity" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Equity</th>
                    
                    <th className="col-medium"><SortButton item="risk_level" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Risk Level</th>
                    
                    <th className="col-large"><SortButton item="volume" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Volume</th>
                    
                    <th className="col-medium"><SortButton item="market_cap" sortedBy={sortedBy} setSortedBy={setSortedBy} ascending={ascending} setAscending={setAscending}/>Market Cap</th>

                </tr>
                </table>
                <div id="portfolio-data">
                    <table className="coin-table portfolio-table" >
                    {coinList.map( (c) => 
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