export default function kinderSorter(key, ascending) {
    let direction
    ascending? direction=1 : direction=-1

    return function (a,b) {
        let output
        if (a[key] > b[key]) {
            output=1
        } else if (a[key] < b[key]) {
            output=-1
        } else {
            output=0
        }
        return output*direction

    }
}