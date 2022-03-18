function Padre(nombre, apellido, soy) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.soy = soy;
}

Padre.prototype.saludo = function() {
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`);
}

function Hijo(nombre, apellido, soy, tengo) {
    Padre.call(this, nombre, apellido, soy);
    this.tengo = tengo;
}

Hijo.prototype = Padre.prototype;
Hijo.prototype.saludoHijo = function() {
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy} y tengo ${this.tengo} años`);
}
const padre = new Padre('Ramón Antonio Gerardo', 'Estévez', 'el padre');
const hijo = new Hijo('Carlos Irwin', padre.apellido, 'el hijo', 55);

// console.log(padre);
// console.log(hijo);
padre.saludo();
hijo.saludoHijo();