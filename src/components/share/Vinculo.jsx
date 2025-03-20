import estilos from './Vinculo.module.css'

function Vinculo({children, texto, href}) {

    return ( 
        <a href={href} className={estilos.vinculo}>
            {children}
            {texto && <span className={estilos.texto}>{texto}</span>}
        </a>     
    )
  }
  
  export default Vinculo
  