import { Route , Routes } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import Careers from './pages/Careers'
import Service from './pages/Services'
import Navbar from './components/Navbar'
import Home from './pages/Home'
function App() {

  return (
    <>
    <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/team' element={<Blog/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/careers' element={<Careers/>}/>
     </Routes> 
    </>
  )
}

export default App
