import { Link } from 'react-router'
import estilos from './Vinculo.module.css'

function Vinculo({children, texto, to}) {

    return ( 
        <Link to={to} className={estilos.vinculo}>
        
            {children}
            {texto && <span className={estilos.texto}>{texto}</span>}
         
        </Link>
    )
  }
  
  export default Vinculo
  