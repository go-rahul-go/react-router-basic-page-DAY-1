import React, { createContext,useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import ThemeToggle from './components/ThemeToggle';
import "./style.css";
export const ThemeContext=createContext();
const App = () => {
  const [theme,changeTheme]=useState("light");
  return (
    <>
    <ThemeToggle getTheme={changeTheme}/>
    <Navbar/>
    <ThemeContext.Provider value={theme}>
   <Routes>
      <Route path="/" index Component={Home}/>
      <Route path="/about" Component={About}/>
      <Route path="/contact" Component={Contact}/>
      <Route path="/project1" Component={Project1}/>
      <Route path="/project2" Component={Project2}/>
   </Routes>
   </ThemeContext.Provider>
   </>
  )
}

export default App;