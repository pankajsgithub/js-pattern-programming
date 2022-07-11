//     *        5-1 (n-row)
//    **        5-2
//   ***        5-3
//  ****        5-4
// *****        5-5

// *****
// ****
// ***
// **
// *

function starpattern4(n) {
    let value = ''
    for (let row = 1; row <= n; row++) {
        // for (let colspace = 1; colspace <= n - row; colspace++) {
        //     value += " "
        // }
        for (let col = 1; col <= n - row + 1; col++) {
            value += '*'
        }
        value += '\n'
    }
    return value
}
console.log(starpattern4(5));