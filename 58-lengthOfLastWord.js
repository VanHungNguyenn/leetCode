/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = (s) => {
	const sToTrim = s.trim().split(' ')
	return sToTrim[sToTrim.length - 1].length
}

console.log(lengthOfLastWord('   fly me   to   the moon  '))
console.log(lengthOfLastWord('luffy is still joyboy'))
