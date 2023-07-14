import prompt from 'prompt-sync'

const promptSetup = prompt();

let numeros: number[] = [2];

for (let index = 1; index <= 2; index++){
    let numero: any = Number(promptSetup('Digite os números desejados: '));
    while (isNaN(numero)){
        console.log('Digite um número válido. Tente novamente.');
        numero = Number(promptSetup('Digite os números desejados: '));
    }
    numeros.push(numero);
}

if(numeros[1] > numeros[2] && numeros[1] % numeros[2] == 0){
    console.log('O maior número é múltiplo do menor.');
} else if(numeros[2] > numeros[1] && numeros[2] % numeros[1] == 0){
    console.log('O maior número é múltiplo do menor.');
} else {
    console.log('O maior número não é múltiplo do menor.');
}

