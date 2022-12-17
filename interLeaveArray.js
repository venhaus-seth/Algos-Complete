
/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */

//-check which array has longer length
//-set variable to longer_array
//-for loop thru array ending at length of longer_array
//  - if "i" less than either arr1 or arr2, than push into return_array

function interleaveArrays(arr1, arr2) {

    longer_array = ""
    return_array = []
    if (arr1.length > arr2.length) {
        longer_array = arr1.length
    } else {
    longer_array = arr2.length
    }

    for (var i=0; i<longer_array;i++) {
        if (i < arr1.length) {
            return_array.push(arr1[i])
        }
        if (i < arr2.length) {
            return_array.push(arr2[i])
        }
    }
    return return_array
}
    
console.log(interleaveArrays(arrA1, arrB1))
console.log(interleaveArrays(arrA2, arrB2))
console.log(interleaveArrays(arrA3, arrB3))
console.log(interleaveArrays(arrA4, arrB4))



