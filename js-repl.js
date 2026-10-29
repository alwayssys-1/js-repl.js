const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>>> '
});

console.log("JavaScript REPL - escribe como en Python");
console.log("Escribe .exit para salir, .clear para limpiar\n");

rl.prompt();

rl.on('line', (line) => {
  const cmd = line.trim();
  
  if(cmd === '.exit' || cmd === 'exit()') {
    console.log("Bye!");
    process.exit(0);
  }
  if(cmd === '.clear') {
    console.clear();
    rl.prompt();
    return;
  }
  if(!cmd) {
    rl.prompt();
    return;
  }
  
  try {
    // Evalúa como JS
    const result = eval(cmd);
    if(result !== undefined) {
      console.log(result);
    }
  } catch(e) {
    console.log(`Error: ${e.message}`);
  }
  
  rl.prompt();
});
