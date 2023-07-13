import prompt from 'prompt-sync'

const promptSetup = prompt();

const valores: number[] = [];

for (let index = 1; index <= 4; index++) {
    let numerosOrdenados: any = Number(promptSetup('Digite aqui os valores desejados:'));
    while (isNaN(numerosOrdenados)){
        numerosOrdenados = Number(promptSetup('Digite aqui os valores desejados:'));
    }
    valores.push(numerosOrdenados);  
}

const numerosEmOrdem = valores.sort()

console.log(`Veja os números inseridos em ordem: ${numerosEmOrdem}.`);