import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route, 
    NavLink, 
  } from "react-router-dom"; 

import {GithubProfile} from '../GithubProfile'
import { HomePage } from '../HomePage';
import './style.css'

const Navbar=()=> {
    return (
        <Router>
            <div className="nav">
              <div className="navbar">  
                <NavLink to="/" className="navbar-item active">Home</NavLink>   
                <NavLink to="/github-profiles" className="navbar-item active">GitHub Profiles</NavLink>  
              </div>
            </div>
            <Routes> 
                <Route path="/" element={<HomePage/>} />
                <Route path="/github-profiles" element={<GithubProfile/>}  />
            </Routes>
        </Router>
    )
}
export {Navbar};
