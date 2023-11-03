var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
var root = [3, 0, 4, null, 2, null, null, 1];
function trimBST(root, low, high) {
    if (!root)
        return null;
    //when greator
    if (root.val > high) {
        return trimBST(root.left, low, high);
    }
    //when lesser
    if (root.val < low) {
        return trimBST(root.right, low, high);
    }
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
}
;
trimBST(root, 2, 3);
console.log(root);
