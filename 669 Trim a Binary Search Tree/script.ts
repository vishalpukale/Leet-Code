
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}



let root: any = [3,0,4,null,2,null,null,1];



function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {

    if(!root) return null;

    //when greator
    if(root.val > high){
        return trimBST(root.left, low, high);
    }
    //when lesser
    if(root.val<low){
        return trimBST(root.right, low, high);
    }

    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);

    return root;
};

trimBST(root, 1, 3);

console.log(root);