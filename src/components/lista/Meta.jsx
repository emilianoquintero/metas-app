import estilos from './Meta.module.css'


const metaMock = {
    id: '1',
    detalles: 'Correr por 30 mnts',
    periodo: 'dia',
    eventos: 1,
    icono: '🏃',
    meta: 365,
    plazo: '2030-01-01',
    completado: 100
}

function Meta() {

    const {id, detalles, periodo, eventos, icono, meta, plazo, completado } = metaMock;

    return (
        <div className={estilos.meta + ' tarjeta'}>
            <div className='flex items-center'>
                <div className={estilos.icono}>{icono}</div>
                <p className='text-xl ml-5 mr-10'>{eventos}
                    <sub className='text-xs text-gray-500 ml-1'>/ {periodo}</sub>
                </p>
                <p>{detalles}</p>
            </div>
            <div className='flex'>
                <div className='relative m-2 mx-5'>
                    <p className='text-center'>{completado} de {meta}</p>
                    <div className={estilos.barra1}>
                        <div style={{ width: `${Math.round((completado/meta)*100)}%`}}
                        className={estilos.barra2}></div>
                    </div>
                </div>
                <button className='boton boton--gris'>Completado</button>
            </div>
        </div>
    )
  }
  
  export default Meta