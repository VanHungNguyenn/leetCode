/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
	let prefix = ''
	let index = 0

	while (true) {
		let char = strs[0][index]
		if (char === undefined) break

		for (let i = 1; i < strs.length; i++) {
			if (strs[i][index] !== char) return prefix
		}

		prefix += char
		index++
	}

	return prefix
}
