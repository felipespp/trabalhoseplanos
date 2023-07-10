//11 - Calcular a quantidade de litros gastos em uma viagem, sabendo que o veiculo faz 12km/litro. Receber o tempo de percurso
//e a velocidade média

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