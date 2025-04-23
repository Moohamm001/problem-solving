// Example 1:
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function(nums) {
    if(nums.length==1) return 1
    var curr = 10001
    var currCount = 0
    var count = 0
    var point = 0
    for(let i of nums){
        if(i != curr){
            count+=1
            curr=i
            currCount=1
            nums[point] = i
            point+=1
        }
        else if(i==curr){
            if(currCount<2){
                count+=1
                currCount+=1
                nums[point]=i
                point+=1
            }
        }
    }
    return count
};
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))