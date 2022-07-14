import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Faq from './pages/Faq'
import Profile from './pages/Profile'
import Services from './pages/Services'



import Navbar from './components/Navbar'
import NavbarClone from './components/NavbarClone'
import Sidebar from './components/Sidebar'


function App() {
  return (
    <Router>
        <Navbar />
        <NavbarClone />
        <Sidebar />
        <Routes>
            <Route path='/' element={<Home />}>
                <Route index element={<div>arfjgslan khan</div>}/>
                <Route path='profile' element={<Profile />} />
                <Route path='services' element={<Services />} />
            </Route>
            
        </Routes>
    </Router>
  );
}

export default App;