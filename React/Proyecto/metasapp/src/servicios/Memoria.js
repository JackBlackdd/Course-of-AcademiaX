import { createContext, useReducer } from "react";

const listaMock = [{
    id: "1",
    detalles: "Correr por 30 minutos",
    periodo: "Día",
    eventos: "1",
    icono: "🏃",
    meta: "365",
    plazo: "2030-01-01",
    completado: 76,
  },
  {
    id: "2",
    detalles: "Leer 10 libros",
    periodo: "Semana",
    eventos: "1",
    icono: "📖",
    meta: "10",
    plazo: "2030-01-01",
    completado: 0,
  }
];

const estadoInicial = {
    orden: [],
    Objectos: {}
};

function reductor(estado, accion) {
    // eslint-disable-next-line default-case
    switch (accion.tipo) {
        case 'colocar': {
            const metas = accion.metas;
            const nuevoEstado = {
                orden: metas.map(meta => meta.id),
                objetos: metas.reduce((objeto, meta) => ({...objeto, [meta.id]: meta}), {})
            };
            return nuevoEstado;
        };
    }
    // eslint-disable-next-line default-case
    switch (accion.tipo) {
        case 'crear': {
            const id = Math.random(); //accion.metas.id;
            const nuevoEstado = {
                orden: [...estado.orden, id],
                objetos: {
                    ...estado.objetos,
                    [id]: accion.meta
                }
            };
            return nuevoEstado;
        };
    }
};

const metas = reductor(estadoInicial, {tipo: 'colocar', metas: listaMock});

export const Contexto = createContext(null);
function Memoria({children}) {
    const [estado, enviar] = useReducer(reductor, metas);
    return (
        <Contexto.Provider value={[estado, enviar]}>
            {children}
        </Contexto.Provider>
    );
}


export default Memoria;
