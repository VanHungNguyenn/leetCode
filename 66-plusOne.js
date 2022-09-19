/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = (digits) => {
	let i = digits.length - 1
	while (i >= 0) {
		if (digits[i] < 9) {
			digits[i] += 1
			return digits
		}

		digits[i] = 0
		i -= 1
	}

	return [1, ...digits]
}

console.log(plusOne([1, 9]))
