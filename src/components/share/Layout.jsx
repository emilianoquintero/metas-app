import { Outlet } from "react-router"
import Lista from "../lista/Lista"
import Detalle from "../nueva/Detalles"
import Encabezado from "./Encabezado"
import Pie from "./Pie"
import Principal from "./Principal"

function Layout() {

    return (
        <div className='app'>
          <Encabezado></Encabezado>
          <Principal>
            <Outlet>
                
            </Outlet>
          </Principal>
          <Pie></Pie>
        </div>
    )
  }
  
  export default Layout
  