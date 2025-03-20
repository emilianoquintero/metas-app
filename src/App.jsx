import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Encabezado from './components/share/Encabezado'
import Principal from './components/share/Principal'
import Pie from './components/share/Pie'
import Meta from './components/lista/Meta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Encabezado></Encabezado>
      <Principal>
        <Meta></Meta>
      </Principal>
      <Pie></Pie>
    </div>
  )
}

export default App
