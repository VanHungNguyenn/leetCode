/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	let result = 0

	let i = 0

	while (i * i <= x) {
		result = i
		i++
	}

	return result
}

console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(12))
