import estilos from './Presentacion.module.css'
import Logo from "../../img/logo.svg"

function Presentacion() {

    return (
        <div className={estilos.body}>
            <div className={estilos.container}>
                <div className={estilos.icon}><img src={Logo} className={estilos.img}></img></div>
                <div className={estilos.title}>Welcome to GoalsApp</div>
                <div className={estilos.description}>
                This is an application built using Vite and React. It allows you to create, edit, and delete goals.     
                The app leverages localStorage for data persistence and integrates APIs to enable seamless database connectivity. For further details, you can visit the repository
                <a href='https://github.com/emilianoquintero/metas-app/tree/main' target="_blank"> here</a>.
                </div>
            </div>
        </div>

    )
  }
  
  export default Presentacion
  