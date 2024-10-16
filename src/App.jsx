import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Register from './pages/Register';
import TutorApplication from './pages/TutorApplication';
import ClassroomLink from './pages/ClassroomLink';
import Contact from './pages/Contact';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/becometutor' element={<TutorApplication/>} />
      <Route path='/login' element={<ClassroomLink/>} />
      <Route path='/contact' element={<Contact/>} />


      <Route path='/blog' element={<Blog/>} />

    </Routes>
  )
}

export default App;