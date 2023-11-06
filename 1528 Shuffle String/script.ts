let s = "codeleet", indices = [4,5,6,7,0,2,1,3];

function restoreString(s: string, indices: number[]): string {

    let ans: string[] = [];
    let i = 0;

    for(let nums of indices) {
        ans[nums] = s[i];
        i++
    }
    return ans.join("");
}

console.log(restoreString(s, indices));