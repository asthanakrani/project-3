var n = 2;
var i = 1;
var no = 0;

while(i <= n){

  if(n % i == 0){

    no++;
  }
  i++;

}

if(no == 2){
    document.getElementById("prime").innerHTML =n+ " is a Prime number";
  }
  else{
    document.getElementById("prime").innerHTML =n+ " is a Prime number";
  }