import React from 'react'
import Register from './pages/Register'
import {Route, Routes} from "react-router-dom"
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Protect from './protectedRoutes/Protect'
// import CreateNote from './components/CreateNote'
import GetNotes from './components/GetNotes'
// import UpdateNotes from './components/UpdateNotes'
// import DeleteNotes from './components/DeleteNotes'

const App = () => {
  return (
   <Routes>
    {/* Auth Routers */}
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>

    {/* Dashboard Router */}
    <Route path='/dashboard' element={<Protect> <Dashboard/> </Protect>}/>

    {/* Note Routers */}
    <Route path='/get-note' element={<Protect><GetNotes/> </Protect>}/>


    {/* Global Routers */}
    <Route path='*' element={<Login/>}/>
    
   </Routes>

  )
}

export default App