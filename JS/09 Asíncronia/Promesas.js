
//   console.log(1)
//   console.log(2)
//                 console.log(3)
//   console.log(4)
//   console.log(5)

let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(()=>{
        reciboDatos('datos');
    }, 5000);
});
promesa
    .then(texto => texto.toUpperCase())
    .then(texto => texto + '!!!')
    .then(texto => console.log(texto))
    .catch(problema => console.log('Error: ' + problema))
    .finally(() => console.log('Todo Listo!'))

console.log('Quiero ejecutar lo más pronto posible');