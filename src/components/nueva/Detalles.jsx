import { useEffect, useState } from 'react';
import estilos from './Detalles.module.css'

function Detalle() {

    const [form, setform] = useState({
        detalles: 'Correr por 30 mnts',
        eventos: 1,
        periodo: 'dia',
        icono: '🏃',
        meta: 365,
        plazo: '',
        completado: 0,
    });

    const {detalles, eventos, periodo, icono, meta, plazo, completado} = form;

    const onChange = (event, prop) => {
        setform(estado => ({ ...estado, [prop]: event.target.value }));
    };


    useEffect(()=>{
       

    }, [form]);

    const crear = async () => {
        console.log(form);
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
                <button 
                    className='boton boton--negro'
                    onClick={crear}
                    >Crear</button>
                <button className='boton boton--gris'>Cancelar</button>
            </div>
        </div>
    )
  }
  
  export default Detalle
  