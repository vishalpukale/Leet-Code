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


function zigzagLevelOrder(root: TreeNode | null): number[][] {
    let ans: number[][] = [];
    if(root == null) return ans;
    let curr: TreeNode[] = [];
    let next: TreeNode[] = [];

    curr.push(root);

    let level = "even";

    while(curr.length > 0){
        let currLevel: any = [];

        while(curr.length > 0){
            let currNode:any = curr.pop();
            currLevel.push(currNode.val);

            if(level == "even"){
                // add left child then 
                if(currNode.left != null) next.push(currNode.left);
                //right child
                if(currNode.right != null) next.push(currNode.right);
            }else{
                //add right child then
                if(currNode.right != null) next.push(currNode.right);
                //left child
                if(currNode.left != null) next.push(currNode.left);
            }
        }

        ans.push(currLevel);

        curr = next;
        next = [];

        if(level == "even") level = "odd";
        else level = "even";
    }
    return ans;
};