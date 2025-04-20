var isSubsequence = function(s, t) {
    if (s.length === 0) return true;
    let i =0 ;
    let j = 0;
    while(i< s.length && j<t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
};