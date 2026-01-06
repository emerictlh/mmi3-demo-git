import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Taches from './pages/Taches'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/taches" element={<Taches />} />
            <Route path="/apropos" element={<Apropos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
