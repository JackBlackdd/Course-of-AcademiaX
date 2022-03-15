let admin = "Emilia";
// let admin = 'Pedro';
let usuario = admin;

if (usuario === "Pedro") {
    console.log("Autorizado!");
} else if (usuario === "Emilia") {
    // else if es para un caso o situacion en especial, como por ejemplo los privilegios de un admin
    console.log("Autorizado con privilegios");
} else {
    console.log("No autorizado!");
}