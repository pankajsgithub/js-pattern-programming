console.log('Pattern 1');

// *
// **
// ***
// ****
// *****

function starpattern1(n) {
    let value = ""
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            value += '*'
        }
        value += "\n"
    }
    return value
}

console.log(starpattern1(5))