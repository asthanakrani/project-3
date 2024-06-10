var n = 1729;
var temp = n;
var v = 0;
var sumofno = 0;


while (temp > 0) { 
  sumofno = sumofno + temp % 10;
    temp = temp 
    temp = (temp / 10) | 0; 
}

temp = sumofno; 

while (temp > 0) {
  v = v * 10 + temp % 10;
    temp = temp 
    temp = (temp / 10) | 0; 
}


if (v * sumofno === n) {
  document.getElementById("prime").innerHTML =n+ " is a Prime number";
} else {
  document.getElementById("prime").innerHTML =n+ " is a Prime number";
}



