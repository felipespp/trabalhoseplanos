//4 - Receber temperatura em graus Celsius. Calcular e mostrar em fahrenheit F = (9 * C + 160) / 5

import prompt from 'prompt-sync'

const promptSetup = prompt();

let temperaturacelsius: number = 0

while (typeof temperaturacelsius !== 'number' || isNaN(temperaturacelsius)) {
    temperaturacelsius = Number(promptSetup('Insira a temperatura atual em graus Celsius:'));
}

const grauscelsius: number = temperaturacelsius;

const temperaturafahrenheit: number = (temperaturacelsius * 9/5) + 32

console.log(`Em conversão direta, os valores da temperatura inserida em Fahrenheit são ${temperaturafahrenheit}`);