export default function userOwnsCoin(someCoin, currentUser) {
    let arr = currentUser.user_coins.filter( (uc) => uc.coin_id===someCoin.id)
    console.log(arr.length>0)
    return arr.length>0
}