interface Usuario {
  nombre: string;
  edad: number;
  id: number;
}

let usuario: Usuario = {
  nombre: "Mr. Beast",
  edad: 23,
  id: 12
};

type Rol = 'Youtuber' | 'Tiktoker'

function imprimir(i: Usuario, rol: Rol) {
  console.log(`${i.nombre} es un ${rol}`);
}

imprimir (usuario, 'Tiktoker')