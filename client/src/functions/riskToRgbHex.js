export default function riskToRgbHex( risk, maxRisk ) {

    function decToHex(decVal) {
        // create mapping of decimal values to hexadecimal values
        let valMap = new Map([
            [10, "A"],
            [11, "B"],
            [12, "C"],
            [13, "D"],
            [14, "E"],
            [15, "F"],
            [16, "G"]
        ])
        for (let i=0;i<10;i++) {
            valMap.set(i, i)
        }

        // build Hex string by evaluating decimal input
        let hexVal = ""
        if (decVal>16) {
            let chunk = Math.floor(decVal/16)
            hexVal+=valMap.get(chunk)
            decVal -= chunk*16
        } else {
            hexVal+="0"
        }
        hexVal += valMap.get(decVal)

        return hexVal
    }

    // reevaluate risk val as a value on a scale from 0 to 255
    const weightedRisk = (r) => r===maxRisk? 255 : r*Math.floor(255/maxRisk)-1

    // determine hex values for each color by risk
    // 0 risk is full green, max risk is full red, half-max is yellow
    let red, green, blue
    red = decToHex(weightedRisk(risk))
    green = decToHex(255-(weightedRisk(risk)))
    blue = "00"

    // interpolate 3 digit RGB hex string
    let hexRgbVal = `#${red+green+blue}`

    // console.log("HEX VAL: ", hexRgbVal)
    return hexRgbVal
}