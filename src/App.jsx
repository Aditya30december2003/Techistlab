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
import Contact from './pages/Contact'
import ServicesContainer from './pages/Services'
import ScrollTop from './components/scrollTop'
import PageLoadAnimation from './components/PageLoadAnimation'
import {ThemeProvider} from './Context/ThemeContext'
import BlogDetails from './pages/BlogDetails'
function App() {

  return (
    <>
    <ThemeProvider>
    <Navbar/>
    <ScrollTop/>
     <Routes>
      <Route path='/' element={<PageLoadAnimation><Home /></PageLoadAnimation>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/services' element={<ServicesContainer/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes> 
     </ThemeProvider>
     <Footer/>
    </>
  )
}

export default App
