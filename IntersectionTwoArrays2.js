var intersect = function(nums1, nums2) {
    let arr = []
    for ( let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length;j++) {
            if (nums2[j] === nums1[i]) {
                arr.push(nums1[i])
                nums1.splice(i, 1)
                nums2.splice(j, 1)
                i--,j--
            }
        }
    }
    return arr
};

arra1 = [1,2,2,1]
arra2 = [2,2]
arrb1 = [4,9,5,9]
arrb2 = [9,4,9,8,4]
arrc1 = [1,2,3,3,4,9,5,25]
arrc2 = [4,8,4,3,1,2,3,25]
console.log(intersect(arra1, arra2))
console.log(intersect(arrb1, arrb2))
console.log(intersect(arrc1, arrc2))