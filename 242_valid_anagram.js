var isAnagram = function(s, t) {
    var sl = s.length;
    var tl = t.length;
    if (sl != tl){
        return false;
    }
    let hash = {}
    for (let i = 0; i< sl; i++){
        let ss = s[i];
        if (hash[ss]){
            hash[ss] += 1;
        }
        else{
            hash[ss] = 1;
        }
    }
    let match = 0;
    for (let i = 0; i< tl; i++){
        let tt = t[i];
        if (hash[tt]){
            hash[tt] -= 1;
            if (hash[tt] >= 0){
                match += 1
            }
        }
    }
    return match == sl ? true : false
};