import { Link } from 'react-router'
import estilos from './Meta.module.css'

function Meta({id, detalles, periodo, eventos, icono, meta, plazo, completado }) {

    return (
        <Link to={`${id}`} className={estilos.meta + ' tarjeta'}>
            <div className='flex items-center'>
                <div className={estilos.icono}>{icono}</div>
                <p className='text-xl ml-5 mr-10'>{eventos}
                    <sub className='text-xs text-gray-500 ml-1'>/ {periodo}</sub>
                </p>
                <p>{detalles}</p>
            </div>
            <div className='flex items-center'>
                <div className='relative m-2 mx-5'>
                    <p className='text-center'>{completado} of {meta}</p>
                    <div className={estilos.barra1}>
                        <div style={{ width: `${Math.round((completado/meta)*100)}%`}}
                        className={estilos.barra2}></div>
                    </div>
                </div>
                <button className='boton boton--gris'>Complete</button>
            </div>
        </Link>
    )
  }
  
  export default Meta