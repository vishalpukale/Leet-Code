class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function deleteMiddle(head: ListNode | null): ListNode | null{
    if(head===null) return null;
    if(head.next===null) return null;

    let slow: any = head;
    let fast: any = head;
    let prev: any = null;

    while(fast != null && fast.next != null){
        prev = slow;
        slow = slow?.next;
        fast = fast.next.next;
    }
    prev.next = prev?.next?.next;

    return head;
}
