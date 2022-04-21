import React from 'react'
import './normalize.css'
import './App.css'
import Topnavbar from './containers/Topnavbar'
import Footer from './components/Footer/footer'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Pages/Home'
import EventForm from './Pages/EventForm'
import Profile from './Pages/Profile'

function App() {
  return (
      <Router>
        <div id="page-container">
          <Topnavbar/>
          <hr></hr>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/eventform" element={<EventForm/>}/>
          <Route path="/profile" element={<Profile/>}/>
          

        </Routes>
        <Footer/>
      </Router>
  )
}
export default App