let items = [
    ["phone","blue","pixel"],
    ["computer","silver","lenovo"],
    ["phone","gold","iphone"]
];

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    
    const data = ["type", "color", "name"];
    let count = 0;

    for(let i = 0; i < items.length; i++) {
        if(items[i][data.indexOf(ruleKey)] == ruleValue) {
            count++;
        }
    }
    return count;
};

console.log(countMatches(items, "type", "phone"));

