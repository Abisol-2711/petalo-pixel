import { Route, Routes } from 'react-router'
import Catalog from '@/pages/Catalog'
import Home from '@/pages/Home'
import About from '@/pages/About'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalog />} />
      <Route path="/sobre" element={<About />} />
    </Routes>
  )
}

export default AppRouter
