import { useContext } from "react"
import Meta from "./Meta"
import { Contexto } from "../../services/Memoria";
import { Outlet } from "react-router";

function Lista() {
    
    const [estado] = useContext(Contexto);
    
    return (
        <>
            {estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}></Meta>)}
            <Outlet></Outlet>
        </>
    )
  }
  
  export default Lista
  