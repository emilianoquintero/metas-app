import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './components/share/Layout'
import Lista from './components/lista/Lista'
import Detalle from './components/nueva/Detalles'
import NoEncontrado from './components/share/NoEncontrado'
import Modal from './components/share/Modal'
import { useContext, useEffect } from 'react'
import { pedirMetas } from './services/Pedidos'
import { Contexto } from './services/Memoria'

function App() {

  const [,enviar] = useContext(Contexto);

  useEffect(() => {

    async function fetchData() {

        const metas = await pedirMetas();

        enviar({ tipo: "colocar", metas });

    }

    fetchData();

}, []);
  
  // useEffect(() => {
  //   async function fetchData() {
  //     const metas = await pedirMetas();
  //     enviar({ tipo: 'colocar', metas });
  //   }
  //   fetchData();  
  // }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route index element={<Lista/>}></Route>
        <Route path='/lista' element={<Lista/>}>
          <Route path='/lista/:id' 
            element={
            <Modal>
              <Detalle></Detalle>
            </Modal>}/>
        </Route>
        <Route path='/nueva' element={<Detalle/>}></Route>
      </Route>
      <Route path='/*' element={<NoEncontrado/>}/>
    </Routes>
  )
}

export default App
