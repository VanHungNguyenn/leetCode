/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
	let max = 0
	let start = 0
	let end = 0
	let map = new Map()
	while (end < s.length) {
		console.log(`end: ${end}, start: ${start}, max: ${max}`)

		if (map.has(s[end])) {
			console.log(map.get(s[end]) + 1)
			start = Math.max(start, map.get(s[end]) + 1)
		}

		map.set(s[end], end)
		max = Math.max(max, end - start + 1)
		console.log('map', map)
		end++
	}

	return max
}

console.log(lengthOfLongestSubstring('pwwkew'))
