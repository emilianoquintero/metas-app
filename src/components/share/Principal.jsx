
import estilos from './Principal.module.css'
import Vinculo from './Vinculo'
import lista from "../../img/lista.svg"
import nueva from "../../img/nueva.svg"

function Principal({children}) {

    return (
        <div className={estilos.principal}>
            <aside className={estilos.aside}>
                <Vinculo 
                to='/lista' 
                texto='Lista de Metas'>
                    <img src={lista} className={estilos.icono}></img>
                </Vinculo>
                <Vinculo 
                to='/nueva' 
                texto='Nueva Meta'>
                    <img src={nueva} className={estilos.icono}></img>
                </Vinculo>
            </aside>
            <main className={estilos.main}>
                {children}
            </main>
        </div>
    )
  }
  
  export default Principal
  