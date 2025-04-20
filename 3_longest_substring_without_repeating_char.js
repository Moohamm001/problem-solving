// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    var length = s.length
    if (length == 1){
        return 1
    }
    var left = 0;
    var right = 0;
    var longest = 0;
    var curr = 0
    var mem = []
    while( right <= length-1){
        let char = s[right]
        //console.log("now:",char)
        if (mem.includes(char)){
            //console.log("mem.includes:", char)
            if (curr > longest){
                longest = curr
            }
            //console.log("currlongest:", longest)
            left += 1
            right = left
            mem = []
            curr = 0
            continue
        }
        mem.push(char)
        curr+=1
        right+=1
    }
    return longest > curr ? longest : curr
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring("au"))
console.log(lengthOfLongestSubstring("dvdf"))