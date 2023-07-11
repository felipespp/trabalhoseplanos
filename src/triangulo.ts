import prompt from 'prompt-sync'

const promptSetup = prompt();

let valor1: number = 0

while (typeof valor1 !== 'number' || isNaN(valor1)) {
    valor1 = Number(promptSetup('Digite a base do triângulo:'));
}

let valor2: number = 0

while (typeof valor2 !== 'number' || isNaN(valor2)) {
    valor2 = Number(promptSetup('Digite a altura do triângulo:'));
}

const area: number = valor1 * valor2 / 2

console.log(`O valor da área do triângulo resultou em ${area}`)