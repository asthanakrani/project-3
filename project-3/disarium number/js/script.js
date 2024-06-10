var giveno = 100;

for (let currentNumber = 1; currentNumber <= giveno; currentNumber++) {
    let numDigits = 0;
    let tempNumber = currentNumber;
    let temp = currentNumber;
    let sum = 0;

    while (tempNumber > 0) {
        tempNumber = (tempNumber - (tempNumber % 10)) / 10;
        numDigits++;
    }

    while (temp > 0) {
        let digit = temp % 10;
        let product = 1;

        for (let i = 0; i < numDigits; i++) {
            product *= digit;
        }

        sum += product;
        temp = (temp - digit) / 10;
    }

    if (sum == currentNumber) {
      document.getElementById("prime").innerHTML =giveno+= " is a Prime number";
    }
}