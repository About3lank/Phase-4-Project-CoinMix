function Coin({ userCoin, coins }) {

    let full_coin = coins.filter((c) => c.id === userCoin.coin_id)[0]
    // debugger
    function riskColor(risk_val) {
        console.log("RISK_VAL: ", risk_val)
        const colors = new Map([
            [25, "very-high"],
            [20, "high"],
            [15, "medium"],
            [10, "low"],
            [1, "very-low"]
        ])


        for (const [key, val] of colors) {
            if (risk_val >= key) {
                console.log("KEY VAL: ", key, val)
                return val
                // console.log("...")
            }
        }
    }

    // console.log(coin)

    return(
        <tr class={`coin ${riskColor(full_coin.risk_level)}`}>

            <td>${full_coin.name}</td>
            <td>{userCoin.amount}</td>
            <td>{full_coin.price}</td>
            <td>{full_coin.volume}</td>
            <td>{full_coin.market_cap}</td>
            <td>{full_coin.risk_level}</td>
            <td>{full_coin.category}</td>
        </tr>
    )
}

export default Coin;