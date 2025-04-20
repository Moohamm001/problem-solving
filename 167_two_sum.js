var twoSum = function(numbers, target) {
    if (numbers.length === 2) return numbers[0] + numbers[1] === target ? [1, 2] : [];
    let l = 0;
    let r = numbers.length - 1;
    while (l<r){
        let sum = numbers[l] + numbers[r];
        if (sum == target){
            return [l+1, r+1];
        }
        if( sum > target){
            r--;
            continue;
        }
        l++;
    }
};

console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([2,3,4], 6)); // [0,2]
console.log(twoSum([-1,0], -1)); // [0,1]