import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './components/share/Layout'
import Lista from './components/lista/Lista'
import Presentacion from './components/share/Presentacion'
import Detalle from './components/nueva/Detalles'
import NoEncontrado from './components/share/NoEncontrado'
import Modal from './components/share/Modal'
import { useContext, useEffect } from 'react'
import { pedirMetas } from './services/Pedidos'
import { Contexto } from './services/Memoria'

function App() {

  // Se declara enviar para usar el contexto declarado en Memoria
  const [,enviar] = useContext(Contexto);

  // Hook useEffect
  // Se usa para manejar componentes funcionales, como obtener datos, suscribirse a eventos o manipular el DOM.
  // ([]). Un array vacío significa que este efecto solo se ejecutará una vez, después de que el componente se monte.
  // Se omite ya que no estamos obteniendo las metas desde el JSON
  //   useEffect(() => {
  //     async function fetchData() {
  //         const metas = await pedirMetas();
  //         enviar({ tipo: "colocar", metas });
  //     }
  //     fetchData();
  // }, []);

  // Renderisa Layout y dentro de este se encuentra Outlet para renderizar rutas anidadas. Y se renderizan dentro de Layout y Outlet.

  return (
    <Routes>
      <Route path='metas-app/' element={<Layout/>}>
        <Route index element={<Presentacion/>}></Route>
        <Route path='lista' element={<Lista/>}>
          <Route path=':id' 
            element={
            <Modal>
              <Detalle></Detalle>
            </Modal>}/>
        </Route>
        <Route path='nueva' element={<Detalle/>}></Route>
      </Route>
      <Route path='/*' element={<NoEncontrado/>}/>
    </Routes>
  )
}

export default App
