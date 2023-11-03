var strs = ["flower", "flow", "float"];
function lCP(strs) {
    var ans = "";
    for (var i = 0; i < strs[0].length; i++) {
        for (var j = 1; j < strs.length; j++) {
            if (strs[0][i] != strs[j][i] || i >= strs[j].length)
                return ans;
        }
        ans += strs[0][i];
    }
    return ans;
}
console.log(lCP(strs));
