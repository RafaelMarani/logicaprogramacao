function preencherVetor(n){
    var vet=[];
    for(var i = 0; i < n; i++){
        vet[i] = Number(prompt('Informe o ' + (i + 1) + 'o número do vetor'));
        while(isNaN(vet[i])){
            alert('Digite um valor numérico');
            vet[i] = Number(prompt('Informe o ' + (i + 1) + 'o número do vetor'));
        }
    }
    return vet;
}

function exibirVetor(n, vet){
    for(var i = 0; i < n; i++){
        document.write('vetor[',i , ']= ', vet[i], '<br>');
    }
}

function somarDoisVetores(n, vet1, vet2){
    var vetSoma=[];
    for(var i = 0; i < n; i++){
        vetSoma[i] = vet1[i] + vet2[i];
    }
    return vetSoma;
}

function somarVetor(n, vet){
    var soma=0;
    for(var i = 0; i < n; i++){
        soma = soma + vet[i];
    }
   return soma;
}

function contarPares(n, vet){
    var qtd = 0;
    for(var i = 0; i < n; i++){
        if(vet[i] % 2 == 0){
            qtd++;
        }
    } 
    return qtd;
}

function contarImpares(n, vet){
    var qtd = 0;
    for(var i = 0; i < n; i++){
        if(vet[i] % 2 != 0){
            qtd++;
        }
    } 
    return qtd;
}