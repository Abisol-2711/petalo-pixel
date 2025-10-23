import { Route, Routes } from 'react-router'
import Catalog from '@/pages/Catalog'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Layout from '@/layout/Layout'

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/sobre" element={<About />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
