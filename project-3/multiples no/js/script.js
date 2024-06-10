var n = 1;

do {
    if (n % 3 === 0 && n % 5 === 0) {
      document.getElementById("FizzBuzz").innerHTML =n+= " is a FizzBuzz number";
    } else if (n % 3 === 0) {
      document.getElementById("Fizz").innerHTML =n+= " is a Fizz number";
    } else if (n % 5 === 0) {
      document.getElementById("Buzz").innerHTML =n+= " is a Buzz number";
    } else {
        console.log(n);
    }

    n++;
} while (n <= 100);
