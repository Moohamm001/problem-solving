
var isJump =  function(nums){
    let maxJump = 0;
    for (let i=0; i< nums.length; i++){
        if (i > maxJump) return false;
        let jump = i + nums[i];
        if (jump > maxJump) {
            maxJump = jump;
        }
    }
    return true;
}