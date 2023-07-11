import prompt from 'prompt-sync'

const promptSetup = prompt();

let tempoPercurso: any = null; 

while (typeof tempoPercurso !== 'number' || isNaN(tempoPercurso)) {
    tempoPercurso = Number(promptSetup('Insira o tempo de percurso:'))
}

let velocidadeMedia: any = null;

while (typeof velocidadeMedia !== 'number' || isNaN(velocidadeMedia)) {
    velocidadeMedia = Number(promptSetup('Insira a velocidade média do veículo:'))
}

const litrosGastos: number = (tempoPercurso * velocidadeMedia) /12;


console.log(`Com ${tempoPercurso} horas de viagem, serão gastos ${litrosGastos} litros de gasolina numa velocidade média de ${velocidadeMedia} quilômetros por hora.`)