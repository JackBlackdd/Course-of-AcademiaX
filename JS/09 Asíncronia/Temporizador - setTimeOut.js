console.log('Antes');
setTimeout(() => {
    console.log('Cualquier código');
}, 3000);
console.log('Despues');

clearTimeout();