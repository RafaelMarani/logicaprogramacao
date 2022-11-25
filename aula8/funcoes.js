function exibirSituacao(nota, media){
    if(nota >= media){
        alert('Aprovado');
    }
    else{
        alert('Reprovado');
    }
}

function retornarSituacao(nota, media){
    var  situacao;
    if(nota >= media){
        situacao = 'Aprovado';
    }
    else{
        situacao = 'Reprovado';
    }
    return situacao;
}

function metade(n){
    return n/2;
}

function dividir(n1, n2){
    return n1/n2;
}

function pedirComida(){
    document.write(comida + "<br>");
}