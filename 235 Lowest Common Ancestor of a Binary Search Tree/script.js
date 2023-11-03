var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var treeArr = [8, 3, 1, -1, -1, 6, 4, -1, -1, 7, -1, -1, 10, -1, 14, 13, -1, -1, -1];
var i = 0;
function createTree(arr) {
    if (arr[i] == -1) {
        i++;
        return null;
    }
    var me = new TreeNode(arr[i]);
    i++;
    var leftChild = createTree(arr);
    var rightChild = createTree(arr);
    me.left = leftChild;
    me.right = rightChild;
    return me;
}
var root = createTree(treeArr);
function lowestCommonAncestor(root, p, q) {
    var current = root;
    while (current != null) {
        if ((p.value < current.value) && (q.value < current.value)) {
            current = current.left;
        }
        else if ((p.value > current.value) && (q.value > current.value)) {
            current = current.right;
        }
        else {
            return current.value;
        }
    }
}
console.log(lowestCommonAncestor(root, 3, 10));
