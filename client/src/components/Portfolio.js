import { useState, useEffect } from 'react'
import Coin from './Coin.js'

function Portfolio({ coins, setCoins, currentUser }) {
    console.log("CURRENT_USER @PORTFOLIO: ", currentUser)

    const userCoins = currentUser.user_coins


    // console.log("userCoins (after fetch): ", userCoins)
    // console.log("coins: ", coins)

    return(
        <table id="portfolio-table">
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Volume</th>
                <th>Market Cap</th>
                <th>Risk Level</th>
                <th>Category</th>
            </tr>
            {userCoins.map( (c) => <Coin userCoin={c} coins={coins}/>)}
        </table>
    )
}

export default Portfolio;