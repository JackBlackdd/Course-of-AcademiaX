let i = 0;
const id = setInterval(() => {
    i += 10;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Cargando...${i}%`);
    if (i === 100) { 
        clearInterval(id); 
    }
}, 200);

process.on('exit', () => {
    console.log('\nFin del proceso.');
});