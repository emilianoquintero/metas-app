import './Encabezado.css'
import Logo from "../../img/logo.svg"
import Perfil from "../../img/perfil.svg"

function Encabezado() {

  return (
    <header className="encabezado">
        <div className="contenedor">
          <img src={Logo} className='logo'></img>
          <a href="/" className='titulo'>Metas App</a>
        </div>
        <nav>
          <a href="/" className='vinculo'>
            <img src={Perfil} className='icono'></img>
          </a>
        </nav>
    </header>
  )
}

export default Encabezado
