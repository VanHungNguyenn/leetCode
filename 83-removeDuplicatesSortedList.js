/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

var deleteDuplicates = function (head) {
	if (!head) return null

	let current = head

	while (current.next) {
		console.log(`head: ${head.val}`)
		if (current.val === current.next.val) {
			current.next = current.next.next
		} else {
			current = current.next
		}
	}

	return head
}
