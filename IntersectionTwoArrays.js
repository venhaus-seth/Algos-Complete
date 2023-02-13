var intersection = function(nums1, nums2) {
    let arr = []
    for ( let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i]) && !arr.includes(nums1[i])) {
            arr.push(nums1[i])
        }
    }
    return arr
};

arra1 = [1,2,2,1]
arra2 = [2,2]
arrb1 = [4,9,5]
arrb2 = [9,4,9,8,4]
arrc1 = [1,2,3,4,9,5,25]
arrc2 = [4,8,4,1,2,3,25]
console.log(intersection(arra1, arra2))
console.log(intersection(arrb1, arrb2))
console.log(intersection(arrc1, arrc2))