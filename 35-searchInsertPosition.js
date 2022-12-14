/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = (nums, target) => {
	let i = 0
	while (i < nums.length && nums[i] < target) {
		i++
	}

	return i
}
