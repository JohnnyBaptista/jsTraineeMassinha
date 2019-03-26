function start() {

    let multi= [];
    resultados = document.getElementsByClassName('result');

    for (let i = 0; i < (resultados.length)/10 ; i++) {
        for (let j = 0; j < 10; j++) {          
            multi.push(mult(i + 1, j + 1));
        }
    }

    for (let i = 0; i < resultados.length; i++) {
        resultados[i].innerText = multi[i];
    }
    
}

function mult(a,b){
    return a*b;
}