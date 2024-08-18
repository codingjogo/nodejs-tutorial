function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // this will give random number between 1 - 100
}

function celciusFahrenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}

module.exports = {
    generateRandomNumber,
    celciusFahrenheit
};