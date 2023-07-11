import prompt from 'prompt-sync'

const promptSetup = prompt();

let valor1: any = null;

while (typeof valor1 !== 'number' || isNaN(valor1)) {
    valor1 = Number(promptSetup('Digite o valor de a:'));
}

let valor2: any = null;

while (typeof valor2 !== 'number' || isNaN(valor2)) {
    valor2 = Number(promptSetup('Digite o valor de b:'));
}

let valor3: any = null;

while (typeof valor3 !== 'number' || isNaN(valor3)) {
    valor3 = Number(promptSetup('Digite o valor de c:'))
}

const valorA: number = valor1;
const valorB: number = valor2;
const valorC: number = valor3;

const delta: number = valorB * valorB - 4 * valorA * valorC


if (delta > 0) {
    const raiz1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
    const raiz2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);

    console.log(`Delta é maior que zero, portanto o resultado das duas raízes é ${raiz1} ${raiz2}`)
}

else if (delta === 0) {
    const raizdupla = (-valorB + Math.sqrt(delta)) / (2 * valorA);

    console.log(`Delta é igual a zero, portanto o resultado da raiz dupla é ${raizdupla}`)
}

else {
    console.log(`Não existe raiz`)
}