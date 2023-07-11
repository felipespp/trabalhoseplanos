import prompt from 'prompt-sync'

const promptSetup = prompt();

let salarioDeposito: any = null;

while(typeof salarioDeposito !== 'number' || isNaN(salarioDeposito)){
    salarioDeposito = Number(promptSetup('Digite o valor depositado:'))
}

const ajusteDeJuros: number = salarioDeposito*1.013

console.log(`Com os ajustes, este é o valor total do depósito com os juros aplicados em um mês: ${Math.round(ajusteDeJuros)}`)