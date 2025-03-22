import {Children, createContext, useReducer} from 'react';

// const listaMock = [
//     {
//         id: '1',
//         detalles: 'Correr por 30 mnts',
//         periodo: 'dia',
//         eventos: 1,
//         icono: '🏃',
//         meta: 365,
//         plazo: '2030-01-01',
//         completado: 100
//     },
//     {
//         id: '2',
//         detalles: 'Leer libros',
//         periodo: 'ano',
//         eventos: 6,
//         icono: '📗',
//         meta: 12,
//         plazo: '2030-01-01',
//         completado: 0
//     },
//     {
//         id: '3',
//         detalles: 'Viajar a parques nacionales',
//         periodo: 'mes',
//         eventos: 40,
//         icono: '✈️',
//         meta: 60,
//         plazo: '2030-01-01',
//         completado: 30
//     }
// ];

const memoria = localStorage.getItem('metas');
const estadoInicial = memoria
    ? JSON.parse(memoria)
    : {
    orden: [],
    objetos: {}
};

function reductor(estado, accion){
    switch(accion.tipo){
        case 'colocar':{
            const metas = accion.metas;
            const nuevoEstado = {
                orden: metas.map(meta => meta.id),
                objetos: metas.reduce((objeto, meta) => ({ ...objeto, [meta.id]: meta}), {})
            };
            localStorage.setItem('metas', JSON.stringify(nuevoEstado));
            return nuevoEstado;
        };
        case 'actualizar':{
            const id = accion.meta.id;
            estado.objetos[id] = {
                ...estado.objetos[id],
                ...accion.meta
            };
            const nuevoEstado = { ...estado };
            localStorage.setItem('metas', JSON.stringify(nuevoEstado));
            return nuevoEstado;
        };
        case 'crear':{
            console.log(estado.objetos);
            console.log(accion.meta);
            
            const id = Math.random();
            const nuevoEstado = {
                orden: [...estado.orden, id],
                objetos: {
                    ...estado.objetos,
                    [id]: accion.meta
                }
            };
            // localStorage.setItem('metas', JSON.stringify(nuevoEstado));
            return nuevoEstado;
        };
        case 'borrar':{
            const id = accion.id;
            const nuevoOrden = estado.orden.filter(item => item !== id);
            delete estado.objetos[id];
            const nuevoEstado = {
                orden: nuevoOrden,
                objetos:  estado.objetos
            };
            localStorage.setItem('metas', JSON.stringify(nuevoEstado));
            return nuevoEstado;
        };
    }
};

// reductor(estadoInicial, {tipo: 'colocar', metas: listaMock});

export const Contexto = createContext(null);

function Memoria({ children }) {
    const [estado, enviar] = useReducer(reductor, estadoInicial);
    return(
        <Contexto.Provider value={[estado, enviar]}>
            {children}
        </Contexto.Provider>
    );
}

export default Memoria;
