var no = 151;
var sum = 0;
var temp;
var abc;

temp = no;

while(no != 0){
    abc = no % 10 ;
    sum =(sum * 10) + abc  ;
    no = parseInt(no / 10);
}

if(temp == no){
    document.write(temp + " is palindrome");
}
else{
    document.write(temp + " is not palindrome");
}
document.getElementById("atm").innerHTML = temp ;
