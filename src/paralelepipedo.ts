import prompt from 'prompt-sync'

const promptSetup = prompt();

let comprimento, largura, altura: number = 0

while (typeof comprimento !== 'number' || isNaN(comprimento)) {
    comprimento = Number(promptSetup('Digite o comprimento do paralelepípedo:'))
}

while (typeof largura !== 'number' || isNaN(largura)) {
    largura = Number(promptSetup('Digite a largura do paralelepípedo:'))
}

while (typeof altura !== 'number' || isNaN(altura)) {
    altura = Number(promptSetup('Digite a altura do paralelepípedo:'))
}
const comprimento1: number = comprimento;
const largura1: number = largura;
const altura1: number = altura;

const volume: number = altura1 * largura1 * comprimento1 

console.log(`O volume do paralelepípedo é: ${volume}`)