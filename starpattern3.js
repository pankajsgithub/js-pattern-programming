// *
// **
// ***
// ****
// *****
// ****  6=4  6-5   1 (row-n)  2n-row
// ***   7=3  n-2   2 (row-n)
// **    8=2        3 (row-n)
// *     9=1        4

// right pascal star pattern

function starpattern3(n) {
    let value = ''
    let numofcol = 0
    for (let row = 1; row <= 2 * n - 1; row++) {
        value += `${row} : `
        numofcol = row <= n ? row : 2 * n - row
        for (let col = 1; col <= numofcol; col++) {
            value += `*`
        }
        value += '\n'
    }
    return value
}

console.log(starpattern3(5));