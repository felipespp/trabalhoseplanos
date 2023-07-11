import prompt from 'prompt-sync'

const promptSetup = prompt();

var x = true && true;

var y = true && false;

var z = !false;

var w = false || true; 

console.log(x, y, z, w);