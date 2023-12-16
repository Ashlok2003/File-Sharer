import { useState } from 'react'
import { Header, Footer } from './components/index.js';
import { Home, Technologies, Dashboard } from './pages/index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/technologies' element={<Technologies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
