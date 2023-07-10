//9 - Receber o ano de nascimento e o ano atual, calcula e mostre a diferença de idade e quantos anos terá em 17 anos.

import prompt from 'prompt-sync'

const promptSetup = prompt();

let anodenascimento, anoatual: number = 0

while(typeof anodenascimento !== 'number' || isNaN(anodenascimento)){
    anodenascimento = Number(promptSetup('Digite seu ano de nascimento:'))
}

while(typeof anoatual !== 'number' || isNaN(anoatual)){
    anoatual = Number(promptSetup('Digite o ano atual:'))
}

const anodenascimento1: number = anodenascimento;
const anoatual1: number = anoatual;

const diferencadeidade: number = anoatual - anodenascimento;
const idadeatual1: number = diferencadeidade
const idadeemdezesseteanos: number = idadeatual1 + 17;

console.log(`Essa é a diferença entre o ano de nascimento do aplicante e o ano atual: ${diferencadeidade}\nEssa é a idade do aplicante em dezessete anos: ${idadeemdezesseteanos}`)
