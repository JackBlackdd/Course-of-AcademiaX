try {
    let object = {};
    await object(([])); // Error en el codigo
} catch (e) {
    console.error('El error es: ' + e.message); //e.message imprime el mensaje del error
} finally {
    console.log('final');
}