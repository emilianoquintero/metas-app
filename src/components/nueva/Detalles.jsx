import { useEffect, useState, useContext } from 'react';
import estilos from './Detalles.module.css'
import { Contexto } from '../../services/Memoria';
import { useNavigate, useParams } from 'react-router';
import { actualizarMetas, borrarMeta, crearMeta } from '../../services/Pedidos';

function Detalle() {

    const {id} = useParams();

    const [form, setform] = useState({
        detalles: '',
        eventos: '',
        periodo: '',
        icono: '',
        meta: '',
        plazo: '',
        completado: '',
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

    const crear = async () => {
        if (Object.values(form).some(valor => !valor)) {
            alert('Es necesario completar todos los campos para crear una meta.');
            return;
        }
        const nuevaMeta = await crearMeta();
        enviar({tipo: 'crear', meta: nuevaMeta});
        navegar('/lista');
    };

    const actualizar = async () => {
        if ( form.completado > form.meta // Verificar si "completado" es mayor a "meta"
          ) {
            alert('Felicidades superaste tu meta, ahora toca crear una nueva.');
            return;
          }
        const metaActualizada = await actualizarMetas();
        enviar({ tipo : 'actualizar', meta: metaActualizada});
        navegar('/lista');
    };

    const borrar = async () => {
        const idBorrado = await borrarMeta();
        enviar({ tipo : 'borrar', id: idBorrado});
        navegar('/lista');
    };

    const cancelar = () => {
        navegar('/lista');
    };

    const opcionesDeFrecuencia = ['Day', 'Week', 'Mont', 'Year'];
    const opcionesDeIconos = ['✈️', '📗', '🏃', '🏋️‍♀️','💻'];

    return (
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    Discribe your Goal
                    <input 
                        placeholder="Example: Work out for 1 hour per day" 
                        className="input"
                        value={detalles}
                        onChange={e => onChange(e, 'detalles')}>
                    </input>
                </label>
                
                <label className="label">
                    How often do you want to achive your goal?<span>( Ex. 1 per Week)</span>
                    <div className="flex mb-6">
                    <input 
                        type="number" 
                        className="input mr-6" 
                        value={eventos}
                        onChange={e => onChange(e, 'eventos')}>

                    </input>
                    <select className="input" value={periodo} onChange={e => onChange(e, 'periodo')}>
                        <option value="" disabled>Select an option</option>
                        {opcionesDeFrecuencia.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}
                    </select>
                    </div>
                </label>
                <label className="label">
                    How many times do you want to complete this goal?
                    <input type="number" className="input" value={meta} onChange={e => onChange(e, 'meta')}></input>
                </label>
                <label className="label">
                    Do you have a deadline?
                    <input type="date" className="input" value={plazo} onChange={e => onChange(e, 'plazo')}></input>
                </label>
                <label className="label">
                    How many times have you completed this goal?
                    <input type="number" className="input" value={completado} onChange={e => onChange(e, 'completado')}></input>
                </label>
                <label className="label">
                    Chosse an Icon for your goal
                    <select className="input" value={icono} onChange={e => onChange(e, 'icono')}>
                        <option value="" disabled>Select an option</option>
                        {opcionesDeIconos.map(opcion => 
                        <option key={opcion} value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                {!id && <button 
                    className='boton boton--negro'
                    onClick={crear}
                    >Create</button> }
                {id && <button 
                    className='boton boton--gris'
                    onClick={actualizar}
                    >Update</button> }
                {id && <button 
                    className='boton boton--rojo'
                    onClick={borrar}
                    >Delete</button> }
                <button 
                    className='boton boton--gris'
                    onClick={cancelar}
                    >Cancel</button>
            </div>
        </div>
    )
  }
  
  export default Detalle
  