var guessNumber = function(n) {
    var l = 0
    var r = n
    while(l<r){
        var mid = (l+r)/2
        var check = guess(mid)
        if (check==-1){
            r = mid
        }
        if (check==1){
            l=mid
        }
        if(check==0){
            return mid
            break
        }
    }
    // return mid
};