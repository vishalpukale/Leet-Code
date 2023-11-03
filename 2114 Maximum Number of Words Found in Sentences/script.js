var sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
function mostWordsFound(sentences) {
    var maxi = 0;
    for (var i = 0; i < sentences.length; i++) {
        var len = sentences[i].split(" ").length;
        if (len > maxi)
            maxi = len;
    }
    return maxi;
}
console.log(mostWordsFound(sentences));
