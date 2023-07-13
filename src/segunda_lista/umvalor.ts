import prompt from 'prompt-sync'

const promptSetup = prompt();

let valor: any = null;

while (typeof valor !== 'number' || isNaN(valor)) {
    valor = Number(promptSetup('Digite um valor: '));
}

if (valor % 2 === 0 && valor % 3 !== 0) {
    console.log('O valor digitado é divisível por 2, mas não por 3.');
} else if (valor % 2 !== 0 && valor % 3 === 0) {
    console.log('O valor digitado é não é divisível por 2, mas é divisível por 3.');
} else {
    console.log('O valor digitado não é divisível nem por 2, nem por 3.');
}
