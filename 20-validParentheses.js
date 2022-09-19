/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
	let stack = []
	let map = {
		'(': ')',
		'[': ']',
		'{': '}',
	}

	for (let i = 0; i < s.length; i++) {
		if (map[s[i]]) {
			stack.push(s[i])
		} else {
			if (map[stack.pop()] !== s[i]) return false
		}
	}

	return stack.length === 0
}
