const repeatString = function(message, n) {
    if (n < 0) {
        return 'ERROR' 
    }

    let string = '';

    for (let i = 0; i < n; i++) {
        string += message;
    }
    return string;
}

module.exports = repeatString
