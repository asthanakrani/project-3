
let ptn=' '

for(let i=5;i>=1;i--){

    for(let j=5;j>=i;j--){
        
        ptn+=j +' ';

    }
    ptn+='<br>'
}

document.getElementById('ptn').innerHTML=ptn;