const reverseString = function(string) {
    let length = string.length - 1;
    let letters = string.split('');
    let reversed = [];
    for (let i = length; i >= 0; i--) {
        reversed.push(letters[i]);
    } 
    return reversed.join('')
}

module.exports = reverseString
