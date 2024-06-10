let a = 1; b = 1 ; c = '';

while(a <= 100)
	{
    c = a + b;
	a = b;
	b = c;

    
    document.getElementById("atm").innerHTML+= a + "<br>";

	}
    // document.getElementById("atm").innerHTML = a;
    