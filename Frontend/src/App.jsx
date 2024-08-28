import React from 'react'
import Home from './Home/Home'
import { Route, Routes  } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Contacts from './components/Contacts/Contacts'


const App = () => {
  return (
    <>
   <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Course" element={<Courses />}/> 
      <Route path="/Signup" element={<Signup />}/>
    </Routes>
    <Routes>
    <Route path="/Contact" element={<Contacts />}/>
    </Routes>
    </div>
    </>
  )
}

export default App
