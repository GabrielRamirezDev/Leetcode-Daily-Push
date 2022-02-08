
//Removes punctuation and whitespace

const charsOnly = (string) => {

	return string = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

}