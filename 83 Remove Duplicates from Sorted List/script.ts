function deleteDuplicates(root: ListNode | null): ListNode | null{

    if(root.value === null) return null;

    let curr = root;
    while(curr != null){
        let temp = curr.next;

        while(temp != null && curr.value == temp.value){
            temp = temp.next;
        }
        curr.next = temp;
        curr = curr.next;
    }
    return root;
}