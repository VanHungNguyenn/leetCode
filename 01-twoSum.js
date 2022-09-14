/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}
}

const twoSum2 = function (target, nums) {
	const map = new Map()

	for (let i = 0; i < nums.length; i++) {
		if (map.has(target - nums[i])) {
			return [map.get(target - nums[i]), i]
		}
		map.set(nums[i], i)
	}
}

const twoSum3 = function (nums, target) {
	const visitedNums = {}

	for (let i = 0; i < nums.length; i++) {
		const neededNum = target - nums[i]

		const indexOfNeededNum = visitedNums[neededNum]

		console.log(`visitedNums: ${JSON.stringify(visitedNums)}`)
		console.log(`indexOfNeededNum: ${indexOfNeededNum}`)

		if (indexOfNeededNum >= 0) {
			return [i, indexOfNeededNum]
		}

		visitedNums[nums[i]] = i
	}
}

const nums = [2, 7, 11, 15]
const target = 9
console.log(twoSum3(nums, target))
