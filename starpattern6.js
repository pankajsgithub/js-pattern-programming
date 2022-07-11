//     *        
//    **
//   ***
//  ****
// *****
//  **** 1 row-n    4  2n-row
//   *** 2          3         
//    ** 3          2
//     * 4          1

// r = 1 c = 1  4
// r = 2 c = 2  3

// r = 5 c = 5  0
// r = 6 c = 4  1

// left pascal star pattern

//     *        
//    **
//   ***
//  ****
// *****

function starpattern6(n) {
    let value = ''
    for (let row = 1; row <= 2 * n - 1; row++) {
        // value += `${row} : `
        // let colspacecount = row <= n ? n - row : row - n
        // for (let colspace = 1; colspace <= colspacecount; colspace++) {
        //     value += " "
        // }
        let colcount = row <= n ? row : 2 * n - row
        for (let col = 1; col <= colcount; col++) {
            value += '*'
        }
        value += '\n'
    }
    return value
}
console.log(starpattern6(8));