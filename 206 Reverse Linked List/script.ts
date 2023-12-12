class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
  }
}


function reverseList(head: ListNode | null): ListNode | null {
    if(head == null) return null;
    if(head.next === null) return head;

    let prev:any = null;
    let curr:any= head;
    let nex:any = head.next;

    while(curr!=null){
        curr.next = prev;
        prev = curr;
        curr = nex;
        if(nex != null) nex = nex.next;
    }
    head = prev;
    return head;
}