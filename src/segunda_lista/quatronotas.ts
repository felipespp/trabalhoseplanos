    import prompt from 'prompt-sync'

const promptSetup = prompt();


const notas: number[] = [];

for (let index = 1; index <= 4; index++) {
    let numeroALer: any = Number(promptSetup('Digite uma nota: '));
    while (isNaN(numeroALer)) {
        numeroALer = Number(promptSetup('Digite uma nota: '));
    }
    notas.push(numeroALer);
}

let media: number = 0;

notas.forEach((nota) => {
    media += nota / 4;
})

if (media >= 6.0) {
    console.log(`APROVADO COM MEDIA ${media}`);
} else if (media >= 3.0) {
    console.log(`EXAME COM MEDIA ${media}`);
} else {
    console.log(`RETIDO COM MEDIA ${media}`)
}