import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Career from './Career'
import About from './About'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Navigate replace to="home" />} />
      <Route path="home" element={<Home />} />  
      <Route path="career" element={<Career />}>
      <Route path="about" element={<About />} />
        {/* <Route path="project/:id" element={<Proje/> />} /> */}      
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
