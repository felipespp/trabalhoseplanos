/*15 - Receber 4 notas bimestrais de um aluno, calcular e mostrar a média.
Depois de calcular a média, mostre de acordo com o seguinte:
A - Se média for maior ou igual a 6.0, exibir "APROVADO"
B - Se média for maior ou igual a 3.0 ou menor que 6.0 exibir "EXAME"
C - Se média for menor que 3.0 exibir "RETIDO"
*/

import prompt from 'prompt-sync'

const promptSetup = prompt();

const notas: number[] = [];

for (let index = 1; index <= 4; index++) {
    let numeroALer: any = Number(promptSetup('Digite uma nota:'));
    while(isNaN(numeroALer)){
        numeroALer = Number(promptSetup('Digite uma nota: '));
    }
}