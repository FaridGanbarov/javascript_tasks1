// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    
    let reversed = 0;
    let number = Math.abs(n);

    while (number > 0) {
        const lastDigit = number % 10;
        reversed = reversed * 10 + lastDigit;
        number = Math.floor(number / 10);
    }

    return reversed * Math.sign(n);
}

module.exports = reverseInt;
