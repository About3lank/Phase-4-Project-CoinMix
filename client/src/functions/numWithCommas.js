export default function numWithCommas(num) {

    if (num.toString().length<=3) {
        return num
    }



    let numString = num.toString()
    const hasDecimal = () => numString[numString.length-3]==="."
    let newString = ""
    let commaCount
    if (hasDecimal) {
        commaCount = Math.floor((numString.length-3)/3)
        // console.log("COMMA COUNT: ", commaCount)
    } else {
        // console.log("NOT A DECIMAL")
        commaCount = numString.length/3

    }
    let preCount = numString.length%3
    // console.log(preCount)
    if (preCount>0) {
        newString += numString.slice(0,preCount)
    }
    // console.log(newString)
    
    // console.log(newString)
    for (let i=0;i<commaCount*3;i+=3) {
        if (newString.length>0) {
            newString += ","
        }
        newString += `${numString.slice(preCount+i,preCount+i+3)}`
        // console.log(newString)
    }
    if (hasDecimal) {
        newString += numString.slice(numString.length-3, numString.length)
    }

        // console.log(newString)
    
    
    return newString
}