import prompt from 'prompt-sync'

//1 – Calcular a área do quadrado e apresentar o resultado
const promptSetup = prompt();

let prompt1: number = 0

while(typeof prompt1 !== 'number' || isNaN(prompt1)) {
    prompt1 = Number(promptSetup('Digite o lado A: '));
}

let prompt2: number = 0

while(typeof prompt2 !== 'number' || isNaN(prompt2)) {
    prompt2 = Number(promptSetup('Digite o lado B: '));
}

const ladoA: number = prompt1;
const ladoB: number = prompt2;

const area: number = ladoA * ladoB;

//Formatação de texto
console.log(`A area do quadrado com os numeros digitados resultou em ${area}`)