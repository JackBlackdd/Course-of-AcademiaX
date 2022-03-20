let i = 0;
console.log("Antes");
let interval = setInterval(() => {
    console.log(i++);
}, 1000);
console.log("Despues");

// Para limpiar el intervalo 
// clearInterval(interval)

setTimeout(() => {
    clearInterval(interval);
}, 5000);