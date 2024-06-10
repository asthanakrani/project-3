let sum = 0;
let n = '';

for (let i = 1; i <= 10; i++) {

    let square = i * i;
    
    n += square;
    sum += square;

    if (i < 10) {
        n += ' + ';
    }
   
}



document.querySelector('.n').innerText = `${n}  =  ${sum}`;