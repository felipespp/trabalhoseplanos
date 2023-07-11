import prompt from 'prompt-sync'

const promptSetup = prompt();

let anoDeNascimento, anoAtual: any = null

while(typeof anoDeNascimento !== 'number' || isNaN(anoDeNascimento)){
    anoDeNascimento = Number(promptSetup('Digite seu ano de nascimento:'))
}

while(typeof anoAtual !== 'number' || isNaN(anoAtual)){
    anoAtual = Number(promptSetup('Digite o ano atual:'))
}

const diferencaDeIdade: number = anoAtual - anoDeNascimento;
const idadeAtual1: number = diferencaDeIdade
const idadeEmDezesseteAnos: number = idadeAtual1 + 17;

console.log(`Essa é a diferença entre o ano de nascimento do aplicante e o ano atual: ${diferencaDeIdade}\nEssa é a idade do aplicante em dezessete anos: ${idadeEmDezesseteAnos}`)