/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
	let str = x.toString()
	let start = 0
	let end = str.length - 1

	while (start < end) {
		if (str[start] !== str[end]) return false
		start++
		end--
	}

	return true
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(0))
