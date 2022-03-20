let a = 'a';
let b = 'b';

console.log(a < b);
console.log(a > b);

// El abecedario de javascript empieza con mayusculas, así que para hacer una comparacion correcta, se deben transpasar a mayusculas

console.log(a.toUpperCase() < b.toUpperCase());
console.log(a.toUpperCase() > b.toUpperCase());

console.log(!!"texto" == true);