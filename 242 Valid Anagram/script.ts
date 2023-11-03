let s = "anagram";
let t = "nagaram";

function validateAnagram(s: string, t: string): boolean{

    if(s.length != t.length) return false;

    let freqS: any[] = new Array(26).fill(0);
    let freqT: any[] = new Array(26).fill(0);

    for(let i=0; i<s.length; i++){
        let ascii = s.charCodeAt(i);
        let index = ascii - 97;
        freqS[index]++;
    }
    for(let i=0; i<t.length; i++){
        let ascii = t.charCodeAt(i);
        let index = ascii - 97;
        freqT[index]++;
    }

    for(let i = 0; i<26; i++){
        if(freqS[i] != freqT[i]) return false;
    }
    return true;
}


console.log(validateAnagram(s, t));