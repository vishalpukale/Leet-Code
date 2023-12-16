var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function deleteMiddle(head) {
    var _a;
    if (head === null)
        return null;
    if (head.next === null)
        return null;
    var slow = head;
    var fast = head;
    var prev = null;
    while (fast != null && fast.next != null) {
        prev = slow;
        slow = slow === null || slow === void 0 ? void 0 : slow.next;
        fast = fast.next.next;
    }
    prev.next = (_a = prev === null || prev === void 0 ? void 0 : prev.next) === null || _a === void 0 ? void 0 : _a.next;
    return head;
}
