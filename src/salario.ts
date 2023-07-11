import prompt from 'prompt-sync'

const promptSetup = prompt();

let salario: number = 0

while (typeof salario !== 'number' || isNaN(salario)) {
    salario = Number(promptSetup('Digite o salário total:'));
}

const salariocomaumento: number = salario * 1.15

console.log(`Seu salário total com o aumento de 15% é ${Math.round(salariocomaumento)}`)