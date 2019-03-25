function pegaValor(){
    let tabela;
    let vals = [];
    tabela = document.getElementsByClassName('valor');
    for(let i = 0; i < tabela.length; i++){
        vals.push(tabela[i].innerText);
    }

    return fazAnalise(vals);

}

function refazString(vals){
    let substring = [];
    for (let i = 0; i < vals.length; i++) {
        substring[i] = vals[i].replace('x','');        
    }
    return fazAnalise(substring);
}

function fazAnalise(vals){
    let resultado = document.getElementsByClassName('result');
    let parcial = [];
    let result = [] ;
    for (let i = 0; i < resultado.length; i++) {
        parcial.push(resultado[i].innerText);
    }
    for(let i = 0; i < parcial.length; i++){
        if(parcial[i] === "1x10"){
            parcial[i] = mult(vals[i][0],vals[i][2]);
        } else{
            parcial[i] = 'VALOR X 10';
        }
    } 
    console.log(parcial);
}

function mult(a,b){
    return a*b;
}