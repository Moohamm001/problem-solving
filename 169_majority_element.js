var majorityElement = function(nums) {
    var hash = {}
    for (let i of nums){
        if (hash[i]){
            hash[i] +=1
            continue
        }
        hash[i] = 1
    }
    var max = 0
    var res = 0
    for (let key in hash){
        if (hash[key]){
            if (hash[key]>max){
                max = hash[key]
                res = key
                
            }
        }
    }
    return parseInt(res)
};