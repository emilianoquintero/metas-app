import { useEffect, useState, useContext } from 'react';
import estilos from './Detalles.module.css'
import { Contexto } from '../../services/Memoria';
import { useNavigate, useParams } from 'react-router';

function Detalle() {

    const {id} = useParams();

    const [form, setform] = useState({
        detalles: 'Correr por 30 mnts',
        eventos: 1,
        periodo: 'dia',
        icono: '🏃',
        meta: 365,
        plazo: '',
        completado: 0,
    });

    const [estado, enviar] = useContext(Contexto);

    const {detalles, eventos, periodo, icono, meta, plazo, completado} = form;

    const onChange = (event, prop) => {
        setform(estado => ({ ...estado, [prop]: event.target.value }));
    };


    useEffect(()=>{
        const metaMemoria = estado.objetos[id];
        if (!id) return;
        if (!metaMemoria){
            return navegar('/lista');
        }
        setform(estado.objetos[id]);
    }, [id]);

    const navegar = useNavigate();

    const crear = () => {
        enviar({tipo: 'crear', meta: form});
        navegar('/lista');
    };

    const actualizar = () => {
        enviar({ tipo : 'actualizar', meta: form});
        navegar('/lista');
    };

    const borrar = () => {
        enviar({ tipo : 'borrar', id});
        navegar('/lista');
    };

    const cancelar = () => {
        navegar('/lista');
    };

    const opcionesDeFrecuencia = ['Dia', 'Semana', 'Mes', 'Ano'];
    const opcionesDeIconos = ['✈️', '📗', '🏃', '🏋️‍♀️','💻'];

    return (
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    Describe tu meta
                    <input 
                        placeholder="Ej. Leer 10 hojas al dia" 
                        className="input"
                        value={detalles}
                        onChange={e => onChange(e, 'detalles')}>
                    </input>
                </label>
                
                <label className="label">
                    Con que frecuencia deseas cumplir tu meta?<span>(ej. 1 vez a la semana)</span>
                    <div className="flex mb-6">
                    <input 
                        type="number" 
                        className="input mr-6" 
                        value={eventos}
                        onChange={e => onChange(e, 'eventos')}>

                    </input>
                    <select className="input" value={periodo} onChange={e => onChange(e, 'periodo')}>
                        {opcionesDeFrecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                    </div>
                </label>
                <label className="label">
                    Cuantas veces deseas completar esta meta
                    <input type="number" className="input" value={meta} onChange={e => onChange(e, 'meta')}></input>
                </label>
                <label className="label">
                    Tienes una fecha limite
                    <input type="date" className="input" value={plazo} onChange={e => onChange(e, 'plazo')}></input>
                </label>
                <label className="label">
                    Cuantas veces haz acompletado esta meta
                    <input type="number" className="input" value={completado} onChange={e => onChange(e, 'completado')}></input>
                </label>
                <label className="label">
                    Escoje el icono para la meta
                    <select className="input" value={icono} onChange={e => onChange(e, 'icono')}>
                        {opcionesDeIconos.map(opcion => 
                        <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                {!id && <button 
                    className='boton boton--negro'
                    onClick={crear}
                    >Crear</button> }
                {id && <button 
                    className='boton boton--gris'
                    onClick={actualizar}
                    >Actualizar</button> }
                {id && <button 
                    className='boton boton--rojo'
                    onClick={borrar}
                    >Borrar</button> }
                <button 
                    className='boton boton--gris'
                    onClick={cancelar}
                    >Cancelar</button>
            </div>
        </div>
    )
  }
  
  export default Detalle
  