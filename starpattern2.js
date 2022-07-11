// ***** r=1 c=5
// ****  r=2 c=4
// ***   r=3 c=3
// **    r=4 c=2
// *     r=5 c=1

function starpattern2(n) {
    let value = ""
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n - row + 1; col++) {
            value += '*'
        }
        value += '\n'
    }
    return value
}

console.log(starpattern2(5));