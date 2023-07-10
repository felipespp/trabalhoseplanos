//8 - Receber o valor de um depósito, calcular e mostrar o valor após 1 mês de aplicação, sabendo que rende 1.3% ao mês.

import prompt from 'prompt-sync'

const promptSetup = prompt();

let salarioDeposito: number = 0;

while(typeof salarioDeposito !== 'number' || isNaN(salarioDeposito)){
    salarioDeposito = Number(promptSetup('Digite o valor depositado:'))
}

const salariocomaumento: number = salarioDeposito;

const ajustedejuros: number = salarioDeposito*1.013

console.log(`Com os ajustes, este é o valor total do depósito com os juros aplicados em um mês: ${Math.round(ajustedejuros)}`)