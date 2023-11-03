let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

function mostWordsFound(sentences: string[]):number{

    let maxi = 0;
    for(let i = 0; i < sentences.length; i++){
        let len = sentences[i].length;
        if(len > maxi) maxi = len;
    }
    return maxi;
}


console.log(mostWordsFound(sentences));