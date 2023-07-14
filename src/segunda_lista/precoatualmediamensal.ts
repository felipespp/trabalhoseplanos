import prompt from 'prompt-sync'

const promptSetup = prompt();

let precoAtual, mediaMensal: any = null;

while (typeof precoAtual !== 'number' || isNaN(precoAtual)) {
    precoAtual = parseFloat(promptSetup('Digite o preço atual do produto:'));
    while (isNaN(precoAtual)) {
        console.log('Por favor, insira um valor válido.')
        precoAtual = parseFloat(promptSetup('Digite o preço atual do produto:'))
    }
}

while (typeof mediaMensal !== 'number' || isNaN(mediaMensal)) {
    mediaMensal = parseFloat(promptSetup('Digite a média mensal do produto:'))
    while (isNaN(mediaMensal)) {
        console.log('Por favor, insira um valor válido.')
        mediaMensal = parseFloat(promptSetup('Digite a média mensal do produto:'))
    }
}

if (mediaMensal < 500 && precoAtual < 30) {
    console.log(`O novo preço do produto é ${precoAtual + (precoAtual * 0.1)}`);

} else if (mediaMensal <= 1000 && precoAtual >= 30 && precoAtual < 80) {
    console.log(`O novo preço do produto é ${precoAtual + (precoAtual * 0.15)} `)

} else if (mediaMensal >= 1000 && precoAtual >= 80) {
    console.log(`O novo preço do produto é ${Math.round(precoAtual - (precoAtual * 0.05))}`)
} else {
    console.log(`Não haverá alteração de preço.`)
}