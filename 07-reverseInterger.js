/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let arr = x.toString().split('')

	let result = ''

	for (let i = arr.length - 1; i >= 0; i--) {
		result += arr[i]
	}

	if (result[result.length - 1] === '-') {
		result = result.slice(0, result.length - 1)
		result = '-' + result
	}

	result = parseInt(result)

	if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
		return 0
	}

	return result
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
