class TreeNode{
    value : number;
    left : TreeNode | null;
    right : TreeNode | null;
    constructor(value : number){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let treeArr = [8,3,1,-1,-1,6,4,-1,-1,7,-1,-1,10,-1,14,13,-1,-1,-1];
let i = 0;

function createTree(arr): TreeNode | null {
    if(arr[i] == -1){
        i++;
        return null;
    }

    let me = new TreeNode(arr[i]);
    i++;

    let leftChild = createTree(arr);
    let rightChild = createTree(arr);

    me.left = leftChild;
    me.right = rightChild;

    return me;
}
let root = createTree(treeArr);



function rightSideView(root: TreeNode | null): number[]{
    if(root == null) return [];

    let queue: any = [];
    queue.push(root);
    let ans: any = [];

    while(queue.length > 0) {
        let size = queue.length;
        let level: any = [];
        while(size > 0){
            //remove 
            let current = queue.shift();
            //work
            level.push(current.value);
            //left child
            if(current.left != null) queue.push(current.left);
            //right child
            if(current.right != null) queue.push(current.right);
            size--;
        }
        ans.push(level[level.length - 1]);
    }
    return ans;
}

console.log(rightSideView(root));