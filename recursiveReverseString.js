/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {
    
    //base case
    if (str.length <= 1) {
        return str
    }
    //recursion
    return str.charAt(str.length-1) + reverseStr(str.substring(0, str.length - 1))
}

console.log(reverseStr(str1))
console.log(reverseStr(str2))
console.log(reverseStr("abcdefghi"))

/*****************************************************************************/
