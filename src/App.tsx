import './assets/styles/app.scss'
import Cards from './components/pages/Cards/component'
import Instriction from './components/pages/Instruction/component'
import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cards" element={<Cards />} />
          <Route path="/instriction" element={<Instriction />} />
          <Route path="/" element={<Instriction />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
