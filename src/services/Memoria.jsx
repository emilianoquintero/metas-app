import {Children, createContext, useReducer} from 'react';

const listaMock = [
    {
        id: '1',
        detalles: 'Este es e; ejemplo de una meta',
        periodo: 'dia',
        eventos: 1,
        icono: '🏃',
        meta: 100,
        plazo: '2030-01-01',
        completado: 50
    },
];

// Para almacenar las metas en localstorage
// const memoria = localStorage.getItem('metas');
// const estadoInicial = memoria
//     ? JSON.parse(memoria)
//     : {
//     orden: [],
//     objetos: {}
// };

const estadoInicial = {
    orden : [],
    objetos: {}
}

function reductor(estado, accion){
    switch(accion.tipo){
        case 'colocar':{
            const metas = accion.metas;
            const nuevoEstado = {
                orden: metas.map(meta => meta.id),
                objetos: metas.reduce((objeto, meta) => ({ ...objeto, [meta.id]: meta}), {})
            };
            // localStorage.setItem('metas', JSON.stringify(nuevoEstado));
            return nuevoEstado;
        };
        case 'actualizar':{
            const id = accion.meta.id;
            estado.objetos[id] = {
                ...estado.objetos[id],
                ...accion.meta
            };
            const nuevoEstado = { ...estado };
            // localStorage.setItem('metas', JSON.stringify(nuevoEstado));
            return nuevoEstado;
        };
        case 'crear': {
            // const valores = Object.values(estado.objetos).map(objeto => objeto.id);
            // let id;
            // do {
            //     id = String(Math.floor(Math.random() * 100)); 
            //   } while (valores.includes(id));
            // const nuevoEstado = {
            //     orden: [...estado.orden, id],
            //     objetos: {
            //         ...estado.objetos,
            //         [id]: {id, ...accion.meta}
            //     }
            // };
            // localStorage.setItem('metas', JSON.stringify(nuevoEstado));
            // return nuevoEstado;
            
            const id = accion.meta.id;
            const nuevoEstado = {
                orden: [...estado.orden, id],
                objetos: {
                    ...estado.objetos,
                    [id]: accion.meta
                }
            };
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
            // localStorage.setItem('metas', JSON.stringify(nuevoEstado));
            return nuevoEstado;
        };
        default:
            throw new Error();
    }
};

// Coloca la lista inicial 
// reductor(estadoInicial, {tipo: 'colocar', metas: listaMock});

//crear un contexto, que es una forma de compartir datos entre componentes sin tener que pasar las propiedades manualmente en cada nivel.
export const Contexto = createContext(null);

function Memoria({ children }) {

    // hook useReducer 
    // reductor: Es una función reductora (reducer) que define cómo cambiará el estado en respuesta a las acciones enviadas. Su estructura suele ser (estadoActual, accion) => nuevoEstado
    // estadoInicial: Es el estado inicial que quieres establecer al comenzar.
    const [estado, enviar] = useReducer(reductor, estadoInicial);
    return(

        // El Provider es un componente especial que viene con cada contexto creado con createContext.  
        // El atributo value establece el valor que los componentes hijos pueden consumir utilizando el contexto (useContext(Contexto)).
        <Contexto.Provider value={[estado, enviar]}>
            {children}
        </Contexto.Provider>
    );
}

export default Memoria;
