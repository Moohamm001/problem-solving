// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

var isPalindrome = function(s) {
    let str = s.replace(/[^0-9a-z]/gi, '').toLowerCase();

    let l = 0;
    let r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};