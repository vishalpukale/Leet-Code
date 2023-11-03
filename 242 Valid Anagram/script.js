var s = "anagram";
var t = "nagaam";
function validateAnagram(s, t) {
    if (s.length != t.length)
        return false;
    var freqS = new Array(26).fill(0);
    var freqT = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        var ascii = s.charCodeAt(i);
        var index = ascii - 97;
        freqS[index]++;
    }
    for (var i = 0; i < t.length; i++) {
        var ascii = t.charCodeAt(i);
        var index = ascii - 97;
        freqT[index]++;
    }
    for (var i = 0; i < 26; i++) {
        if (freqS[i] != freqT[i])
            return false;
    }
    return true;
}
console.log(validateAnagram(s, t));
