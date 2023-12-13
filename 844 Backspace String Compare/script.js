var s = "ab#c";
var t = "ad#c";
function backspaceCompare(s, t) {
    var st1 = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '#') {
            if (st1.length > 0)
                st1.pop();
        }
        else {
            st1.push(s[i]);
        }
    }
    var pro1 = st1.join('');
    var st2 = [];
    for (var i = 0; i < t.length; i++) {
        if (t[i] == '#') {
            if (st2.length > 0)
                st2.pop();
        }
        else {
            st2.push(t[i]);
        }
    }
    var pro2 = st1.join('');
    if (pro1 == pro2)
        return true;
    else
        return false;
}
console.log(backspaceCompare(s, t));
