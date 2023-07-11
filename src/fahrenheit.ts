import prompt from 'prompt-sync'

const promptSetup = prompt();

let temperaturacelsius: any = null;

while (typeof temperaturacelsius !== 'number' || isNaN(temperaturacelsius)) {
    temperaturacelsius = Number(promptSetup('Insira a temperatura atual em graus Celsius:'));
}

const temperaturafahrenheit: number = (temperaturacelsius * 9/5) + 32

console.log(`Em conversão direta, os valores da temperatura inserida em Fahrenheit são ${temperaturafahrenheit}`);