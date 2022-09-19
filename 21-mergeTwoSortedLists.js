/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

var mergeTwoLists = function (list1, list2) {
	let head = new ListNode()
	let current = head

	while (list1 && list2) {
		if (list1.val < list2.val) {
			current.next = list1
			list1 = list1.next
		} else {
			current.next = list2
			list2 = list2.next
		}

		current = current.next
	}

	current.next = list1 || list2

	return head.next
}
