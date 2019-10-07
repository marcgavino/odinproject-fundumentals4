const sumAll = function(num1, num2) {
    let sum = 0;
    // Negative error handling 
    if (num2 < 0 || num1 < 0) {
        return 'ERROR';
    }
    // String error handling
    else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    else if (num2 < num1) {
        for (let i = num2; i <= num1; i++) {
            sum += i;
        }
    }
    else {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
    }
    return sum;
}

module.exports = sumAll