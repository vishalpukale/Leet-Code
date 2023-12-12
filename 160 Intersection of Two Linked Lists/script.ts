class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
  }
}

function getSize(head: ListNode | null): number {
    let temp = head;
    let count = 0;

    while(temp != null) {
        count++;
        temp = temp.next;
    }
    return count;
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

    let size1 = getSize(headA);
    let size2 = getSize(headB);

    let temp1: any = headA;
    let temp2: any = headB;

    if(size1 > size2) {
        while(size1 > size2) {
            temp1 = temp1.next;
            size1--;
        }
    }else{
        while(size1 < size2) {
            temp2 = temp2.next;
            size2--;
        }
    }

    while(temp1 != temp2){
        temp1 = temp1.next;
        temp2 = temp2.next;
    }

    return temp1;
}