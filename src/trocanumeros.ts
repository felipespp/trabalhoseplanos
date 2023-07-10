// 6 - Receba os valores em X e Y, troque seus valores e mostre na tela
// Bonus pra quem usar menos variaveis

import prompt from 'prompt-sync'

const promptSetup = prompt();

let valor1, valor2: number = 0

valor1 = Number(promptSetup('Digite o primeiro valor:'));

valor2 = Number(promptSetup('Digite aqui o segundo valor:'));

const valorA: number = valor2;
const valorB: number = valor1;

console.log(`Aqui está o primeiro valor: ${valorA}\nE o segundo: ${valorB}`)
