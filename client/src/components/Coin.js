import riskToRgbHex from "../functions/riskToRgbHex"
import numWithCommas from "../functions/numWithCommas"

function Coin({ thisCoin, coins, currentUser, mode }) {

    // console.log("THIS COIN: ", thisCoin)


    // let full_coin = thisCoin
    let userCoin, holding
    
    if (mode==="portfolio") {
        // userCoin= currentUser.user_coins.filter((uc) => uc.coin_id===thisCoin.id)
        // holding = currentUser.user_coins.filter((uc) => uc.coin_id===thisCoin.id)[0].amount
    }

    // console.log("USER COINNN: ", userCoin)

    let hexRgbVal = riskToRgbHex(thisCoin.risk_level, 30)
    // console.log("NUM WITH COMMAS TEST: ", numWithCommas(1113411352.22))

    console.log("AMOUNT: ", thisCoin.amount)
    if (mode==="portfolio") {
        if (!thisCoin.amount) {
            return null
        }
    }

    return(
        <tr className={`coin ${mode}-cell`}
            style={{backgroundColor: `${hexRgbVal}`}}>
                {mode==="portfolio"?
                        <td>{numWithCommas(thisCoin.amount)}</td> 
                        : thisCoin.owned? <td>✓</td> : <td></td>}
   
                    <td>${thisCoin.symbol}</td>
                    <td>{thisCoin.name}</td>
                    <td>${numWithCommas(thisCoin.priceUsd.toFixed(2))}</td>
                    {mode==="portfolio"? <td>${numWithCommas((thisCoin.equity).toFixed(2))}</td> : null}
                    <td>{thisCoin.risk_level}</td>
                    <td>{`$${numWithCommas((thisCoin.volumeUsd24Hr/1000000).toFixed(2))}m/24h`}</td>
                    <td>{`${(thisCoin.marketCapUsd/1000000000).toFixed(2)}b`}</td>


        </tr>
    )
}

export default Coin;