const removeFromArray = function(...args) {
    array = args[0];
    removedChar = args[1]
    savedChars = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
            savedChars.push(item);
        }
    })
    return savedChars;
}

module.exports = removeFromArray
