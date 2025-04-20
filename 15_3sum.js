var threeSum = function(nums) {
    var nums = nums.sort((a, b) => a - b);
    var result = [];
    const target = 0;
    for ( let i = 0; i < nums.length; i++){
        let sum = nums[i];
        var l = i+1;
        var r = nums.length-1;
        while (l<r){
            var threesum = sum + nums[l] + nums[r]
            if (threesum == target){
                let check = ([nums[i],nums[l],nums[r]])
                var isexisting = result.some((item) => item[0] === check[0] && item[1] === check[1] && item[2] === check[2]
            );
                if(!isexisting){
                    result.push(check)
                }
                l++;
            }
            if (threesum > target){
                r--
            }
            if (threesum < target){
                l++
            }
        }
    }
    return result
};

console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])); // []
console.log(threeSum([0,0,0,0])); // []
console.log(threeSum([-2,0,1,1,2])); // []