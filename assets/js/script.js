function start() {

    let multi = [];
    resultados = document.getElementsByClassName('result');

    for (let i = 0; i < (resultados.length)/10 ; i++) {
        for (let j = 0; j < 10; j++) {          
            multi.push();
        }
    }

    for (let i = 0; i < resultados.length; i++) {
        resultados[i].innerText = multi[i];
    }
    
}