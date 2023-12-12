class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
  }
}


function mergeTwoLists(head1: ListNode | null, head2: ListNode | null): ListNode | null {

    let dummy = new ListNode(-1);
    let temp: any = dummy;
    let t1: any = head1;
    let t2: any = head2;

    while(t1 !== null && t1 != null){
        if(t1.val < t2.val){
            temp.next = t1;
            t1 = t1.next;
        } else{
            temp.next = t2;
            t2 = t2.next;
        }
        temp = temp.next;
    }

    if(t1 == null) temp.next = t2;
    else temp.next = t1;

    return dummy.next;
}