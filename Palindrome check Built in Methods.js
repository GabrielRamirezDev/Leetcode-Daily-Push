// Palindrome check: Using Javascript methods
const palindromeCheck = (string) => {

	let reversed = string.split("").reverse().join("")

	if(string === reversed) return true;
}