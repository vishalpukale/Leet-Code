var s = "PAYPALISHIRING";
function convert(s, numRows) {
    if (numRows == 1)
        return s;
    var str = "";
    var n = s.length;
    var formula = (numRows - 1) * 2;
    for (var i = 0; i < numRows; i++) {
        var index = i;
        while (index < n) {
            str += s[index];
            if (i !== 0 && i !== numRows - 1) {
                var k1 = formula - 2 * i;
                var k2 = index + k1;
                if (k2 < n) {
                    str += s[k2];
                }
            }
            index += formula;
        }
    }
    return str;
}
console.log(convert(s, 4));
