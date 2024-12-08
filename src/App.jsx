import { Route , Routes } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import Careers from './pages/Careers'
import Service from './pages/Services'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Team from './pages/Team'
import Footer from './components/Footer'
import AnimatedText from './components/AnimateText'
function App() {

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/careers' element={<Careers/>}/>
     </Routes> 
     <Footer/>

    </>
  )
}

export default App
