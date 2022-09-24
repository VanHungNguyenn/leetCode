/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (numRows === 1) return s

	let arr = new Array(numRows).fill('')

	let row = 0
	let down = true

	for (let i = 0; i < s.length; i++) {
		arr[row] += s[i]
		if (row === 0) down = true
		if (row === numRows - 1) down = false
		if (down) row++
		else row--
	}

	return arr.join('')
}

console.log(convert('PAYPALISHIRING', 3))
