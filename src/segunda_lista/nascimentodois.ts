import prompt from 'prompt-sync'

const promptSetup = prompt();

let anoNascimento, mesNascimento, diaNascimento, anoAtual, mesAtual, diaAtual: any = null;

while (typeof anoNascimento !== 'number' || isNaN(anoNascimento)) {
    anoNascimento = Number(promptSetup('Digite o ano de nascimento:'));
    while (isNaN(anoNascimento)) {
        console.log('Digite um numero válido.');
        anoNascimento = Number(promptSetup('Digite o ano de nascimento:'));
    }
}

while (typeof mesNascimento !== 'number' || isNaN(mesNascimento)) {
    mesNascimento = Number(promptSetup('Digite o mês de nascimento:'));
    while (isNaN(mesNascimento)) {
        console.log('Digite um numero válido.');
        mesNascimento = Number(promptSetup('Digite o mês de nascimento:'));
    }
}

while (typeof diaNascimento !== 'number' || isNaN(diaNascimento)) {
    diaNascimento = Number(promptSetup('Digite o dia de nascimento:'));
    while (isNaN(diaNascimento)) {
        console.log('Digite um numero válido.');
        diaNascimento = Number(promptSetup('Digite o dia de nascimento:'));
    }
}

while (typeof anoAtual !== 'number' || isNaN(anoAtual)) {
    anoAtual = Number(promptSetup('Digite o ano atual:'));
    while (isNaN(anoAtual)) {
        console.log('Digite um numero válido.');
        anoAtual = Number(promptSetup('Digite o ano atual:'));
    }
}

while (typeof mesAtual !== 'number' || isNaN(mesAtual)) {
    mesAtual = Number(promptSetup('Digite o mês atual:'));
    while (isNaN(mesAtual)) {
        console.log('Digite um numero válido.');
        mesAtual = Number(promptSetup('Digite o mês atual:'));
    }
}

while (typeof diaAtual !== 'number' || isNaN(diaAtual)) {
    diaAtual = Number(promptSetup('Digite o dia atual:'));
    while (isNaN(diaAtual)) {
        console.log('Digite um numero válido.');
        diaAtual = Number(promptSetup('Digite o dia atual:'));
    }
}
const dataAtual: any = new Date(anoAtual, mesAtual - 1, diaAtual);
const dataNascimento: any = new Date(anoNascimento, mesNascimento - 1, diaNascimento);

const diferencaMilissegundos = Math.abs(dataAtual - dataNascimento);
const diferencaAno = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 365.25));
const diferencaMes = Math.floor((diferencaMilissegundos % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
const diferencaDia = Math.floor((diferencaMilissegundos % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24));

console.log(`Você nasceu em ${anoNascimento} e tem ${diferencaAno} anos, ${diferencaMes} meses e ${diferencaDia} dias de idade.`);
