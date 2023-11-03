var candies = [2, 3, 5, 1, 3];
function kidsWithCandies(candies, extraCandies) {
    var maxi = -Infinity;
    var ans = [];
    for (var i = 0; i < candies.length; i++) {
        if (candies[i] > maxi)
            maxi = candies[i];
    }
    for (var j = 0; j < candies.length; j++) {
        if (candies[j] + extraCandies >= maxi)
            ans.push(true);
        else
            ans.push(false);
    }
    return ans;
}
console.log(kidsWithCandies(candies, 3));
