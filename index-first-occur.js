var findFirstIndexOccur = function(haystack, needle) {
    if ( needle.length === 0 ) return -1;
    let index = haystack.indexOf(needle)
    return index >= 0 ? index : -1;
};

const haystack1 = "sadbutsad";
const needle1 = "sa";

console.log(strStr(haystack1, needle1));