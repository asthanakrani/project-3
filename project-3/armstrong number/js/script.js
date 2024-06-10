
var sum = 0 ;
var n = 153;
var temp;
var no ;

temp = n;
while (temp > 0) {

    no = temp % 10;
    sum += no * no * no;
   
    temp = parseInt(temp / 10); 
}

if (sum == n) {
    document.write(n +' is Armstrong number.');
}
else {
    document.write(n +' is not Armstrong number.');
}
document.getElementById('atm').innerHTML = sum ;