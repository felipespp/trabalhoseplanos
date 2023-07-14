import prompt from 'prompt-sync'

const promptSetup = prompt();

let horaInicio, minutoInicio, horaFinal, minutoFinal: any = null;

while (typeof horaInicio !== 'number' || isNaN(horaInicio)) {
    horaInicio = Number(promptSetup('Digite a hora de início:'))
}

while (typeof minutoInicio !== 'number' || isNaN(minutoInicio)) {
    minutoInicio = Number(promptSetup('Digite os minutos de início:'))
}

while (typeof horaFinal !== 'number' || isNaN(horaFinal)) {
    horaFinal = Number(promptSetup('Digite a hora de término:'))
}

while (typeof minutoFinal !== 'number' || isNaN(minutoFinal)) {
    minutoFinal = Number(promptSetup('Digite os minutos de término:'))
}

if (horaInicio > 24 || horaFinal > 24 || minutoInicio > 60 || minutoFinal > 60){
    console.log('O horário de início e final deve ser menor que 24 horas, assim como os minutos de início e final devem ser menores que 60 minutos.');
} else if (horaInicio < 24){
    const tempoInicio = horaInicio * 60 + minutoInicio;
const tempoFinal = horaFinal * 60 + minutoFinal;
let tempoJogo = tempoFinal - tempoInicio;

if (tempoJogo < 0) {
  tempoJogo += 24 * 60;
}

const horas = Math.floor(tempoJogo / 60);
const minutos = tempoJogo % 60;

console.log(`O tempo do jogo é de ${horas} horas e ${minutos} minutos.`);
}
