// 1`````r=1 c=1
// 12``` r=2 c=2 (12)
// 123
// 1234
// 12345


function numberpattern1(n) {
    let value = ''
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            value += col
        }
        value += '\n'
    }
    return value
}

console.log(numberpattern1(5));