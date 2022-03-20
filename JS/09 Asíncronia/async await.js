let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(()=>{
        reciboDatos('datos');
    }, 5000);
});

(async function asincrona() {
    let resultado = await promesa;
    console.log(resultado.toUpperCase());
})();