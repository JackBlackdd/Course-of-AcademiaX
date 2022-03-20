let promesa1 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(()=>{ reciboDatos('datos1'); }, 5000);
});
let promesa2 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(()=>{ reciboDatos('datos2'); }, 2000);
});

Promise.all([promesa1, promesa2])
    .then(([resultado1, resultado2])=>{
        console.log(resultado1);
        return resultado2;
    })
    .then(resultado2 => {
        console.log(resultado2.toUpperCase());
    });