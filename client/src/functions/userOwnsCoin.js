export default function userOwnsCoin(someCoin, currentUser) {
    let arr = currentUser.user_coins.filter( (uc) => uc.coin_id===(parseInt(someCoin.rank)-1))
    console.log(arr.length>0)
    return arr.length>0
}