import prompt from 'prompt-sync'

const promptSetup = prompt();

const valores: number[] = [2];

for (let index = 1; index <= 2; index++){
    let diferencaValor: any = Number(promptSetup('Digite um valor:'));
    while (isNaN(diferencaValor)) {
        diferencaValor = Number(promptSetup('Digite um valor:'))
    }
    valores.push(diferencaValor);
}

if(valores[1] == valores[2]){
    console.log('Os valores são iguais.')
} else if(valores[2] > valores[1]) {
    console.log(`O primeiro valor ${valores[1]} é diferente de ${valores[2]}.`) 
} else{
    console.log(`O primeiro valor ${valores[2]} é diferente de ${valores[1]}.`)
}


