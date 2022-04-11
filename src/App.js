import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import {Home, Works,Navbar} from './pages'
function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}  />
          <Route path="/works" element={<Works/>}  />
          <Route path="/services" element={<Works/>}  />
        </Routes>    
    </Router>
  );
}
export default App;
