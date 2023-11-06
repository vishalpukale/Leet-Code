var items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"]
];
function countMatches(items, ruleKey, ruleValue) {
    var data = ["type", "color", "name"];
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i][data.indexOf(ruleKey)] == ruleValue) {
            count++;
        }
    }
    return count;
}
;
console.log(countMatches(items, "type", "phone"));
