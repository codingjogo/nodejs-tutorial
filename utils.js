function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // this will give random number between 1 - 100
}

module.exports = generateRandomNumber;