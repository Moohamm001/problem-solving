var lengthOfLastWord = function(s) {
    let count = 0;
    s = s.trim();
    for (let i=0 ;i< s.length; i++){
        if (s[i] === ' '){
            count = 0;
        }
        else {
            count++;
        }
    }
    return count;
};