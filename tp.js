var sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
function mostWordsFound(sentences) {
    var maxi = 0;
    for (var i = 0; i < sentences.length; i++) {
        var length_1 = sentences[i].split(" ").length;
        console.log(sentences[i].split(" "));
        if (length_1 > maxi)
            maxi = length_1;
    }
    return maxi;
}
;
mostWordsFound(sentences);
