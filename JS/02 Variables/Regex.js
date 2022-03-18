// Otro tipo de dato es llamada expresiones regulares

let text1 = "Me encanta la musica de Charly García";
let text2 = "Me encanta la musica de zed zeppelin";
let text3 = "Encanta  la musica de Calle 13";
let text4 = "La música de calle 13";
let text5 = "Habia una vez musica de verdad";
let text6 = "La mayoria de tiempo bailo solo";
let text7 = "Me gustaria ir contigo a desayunar en la noche";
let text8 = "A caso te gustan las playas";
let text9 = "Ir al museo es una de mis actividades favoritas me";

// Este tipo de dato tambien es llamado regex y es muy util para encontrar informacion en elementos

let regex = /Me/; // Busca la palabra exacta

let regex2 = /Me/i; // Elimina la descriminacion entre mayusculas y minisculas

let regex3 = /^Me/i; // Busca la palabra al principio del texto

let regex4 = /me$/i; // Busca la palabra al final del texto


console.log(regex.test(text1));
console.log(regex.test(text2));
console.log(regex.test(text3));
console.log(regex.test(text4));
console.log(regex.test(text5));
console.log(regex.test(text6));
console.log(regex.test(text7));
console.log(regex.test(text8));
console.log(regex.test(text9));
console.log('----------------------------------------------------------------');
console.log(regex2.test(text1));
console.log(regex2.test(text2));
console.log(regex2.test(text3));
console.log(regex2.test(text4));
console.log(regex2.test(text5));
console.log(regex2.test(text6));
console.log(regex2.test(text7));
console.log(regex2.test(text8));
console.log(regex2.test(text9));
console.log('----------------------------------------------------------------');
console.log(regex3.test(text1));
console.log(regex3.test(text2));
console.log(regex3.test(text3));
console.log(regex3.test(text4));
console.log(regex3.test(text5));
console.log(regex3.test(text6));
console.log(regex3.test(text7));
console.log(regex3.test(text8));
console.log(regex3.test(text9));
console.log('----------------------------------------------------------------');
console.log(regex4.test(text1));
console.log(regex4.test(text2));
console.log(regex4.test(text3));
console.log(regex4.test(text4));
console.log(regex4.test(text5));
console.log(regex4.test(text6));
console.log(regex4.test(text7));
console.log(regex4.test(text8));
console.log(regex4.test(text9));