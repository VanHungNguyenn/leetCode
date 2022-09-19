/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

function createLisNode(arr) {
	let head = new ListNode(0)
	let cur = head
	for (let i = 0; i < arr.length; i++) {
		cur.next = new ListNode(arr[i])
		cur = cur.next
	}

	return head.next
}

// convert listNode to array
function verifyListNode(listNode, output) {
	let _listNode = Object.assign(listNode)
	const nodeValues = []

	do {
		nodeValues.push(_listNode.val)
		_listNode = _listNode.next
	} while (_listNode)

	const isNodeValuesEqualOutput =
		JSON.stringify(nodeValues) === JSON.stringify(output)
	console.log(isNodeValuesEqualOutput)
}

function addTwoNumbers(l1, l2) {
	const result = new ListNode(0)

	let currentResultNode = result

	let carry = 0

	while (l1 || l2 || carry > 0) {
		const l1Val = l1 ? l1.val : 0
		const l2Val = l2 ? l2.val : 0

		const sum = l1Val + l2Val + carry
		carry = Math.floor(sum / 10)

		currentResultNode.next = new ListNode(sum % 10)
		currentResultNode = currentResultNode.next

		if (l1) l1 = l1.next
		if (l2) l2 = l2.next
	}

	return result.next
}

const testCases = require('./02-data.json')

for (let testCase of testCases) {
	const {
		input: { l1, l2 },
		output,
	} = testCase

	const listNode1 = createLisNode(l1)
	const listNode2 = createLisNode(l2)

	const newListNode = addTwoNumbers(listNode1, listNode2)

	verifyListNode(newListNode, output)
}
