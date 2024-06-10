let str = ' ';
let n = 1;

for(let i=1; i<=5; i++){

    for(let j=1; j<=i; j++){

        str += `${n}`;
        n++;
    }
    str += '<br/>';
}

document.querySelector('ptn').innerHTML = str;