import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login/Login.jsx'
import Chat from './pages/Chat/Chat.jsx'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate.jsx'


const App = () => {
  return (
    <>
    {/* <Router> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/profile' element={<ProfileUpdate/>}/>
      </Routes>
    {/* </Router> */}
    </>
  );
}

export default App;