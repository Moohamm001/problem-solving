var reverseWords = function(s) {
    if (s.length === 0 || s.length === 1) return s;
    var res = ""
    var s = s.trim();
    var word = s.split(' ');
    if (word.length === 1) return word[0];
    for ( let i = word.length - 1; i >= 0; i--) {
        if (word[i] === "") continue;
        if ( i == 0){
            res += word[i];
        }
        else{
            res += word[i] + " ";
        }
    }
    return res
};

console.log(reverseWords("  hello world  ")); // "world hello"
console.log(reverseWords("a good   example")); // "example good a"
console.log(reverseWords("  Bob    Loves  Alice   ")); // "Alice Loves Bob"
console.log(reverseWords("Alice does not even like bob")); // "bob like even not does Alice"
console.log(reverseWords("  ")); // ""
console.log(reverseWords("the sky is blue")); // "blue is sky the"