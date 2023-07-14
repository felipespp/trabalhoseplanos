import prompt from 'prompt-sync'

const promptSetup = prompt();

let tipoInvestimento, valorInvestimento: any = null;

while (typeof tipoInvestimento !== 'string') {
    tipoInvestimento = promptSetup('Digite o tipo de investimento desejado (Poupanca ou Renda Fixa): ');
    while (tipoInvestimento !== 'Poupanca' && tipoInvestimento !== 'Renda Fixa') {
        console.log('Por favor, insira um dos dois tipos de investimento possíveis.')
        tipoInvestimento = promptSetup('Digite o tipo de investimento desejado (Poupanca ou Renda Fixa): ');
    }
}

if (tipoInvestimento === 'Poupanca') {
    valorInvestimento = promptSetup('Digite o valor do investimento:');
    console.log(`Valor corrigido do investimento é de: R$${(valorInvestimento + (valorInvestimento * 0.03))}`)
} else if (tipoInvestimento === 'Renda Fixa') {
    valorInvestimento = promptSetup('Digite o valor do investimento:');
    console.log(`Valor corrigido do investimento é de: R$${(valorInvestimento + (valorInvestimento * 0.05))}`)
} else {
    console.log('Tipo de investimento errado.');
}
