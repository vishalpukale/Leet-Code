function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
var root = [1, 2, 2, 3, 4, 4, 3];
function isMirror(a, b) {
    if (a == null && b == null)
        return true;
    if (a == null || b == null)
        return false;
    return (a.val == b.val) && isMirror(a.left, b.right) && isMirror(a.right, b.left);
}
function isSym(root) {
    return isMirror(root, root);
}
console.log(isSym(root));
