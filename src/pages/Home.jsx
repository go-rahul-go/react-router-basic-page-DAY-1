import React,{useRef,useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
const Home = () => {
  const theme=useContext(ThemeContext);
  const [style,changStyle]=useState({border:"2px solid black"})
  const mainRef=useRef();
  const divRef=useRef();
  const headRef=useRef();
  useEffect(()=>{
    if(theme==="dark")
    {
      headRef.current.style.backgroundColor="#B3001B";
      headRef.current.style.color="white";
      mainRef.current.style.backgroundColor="black";
      mainRef.current.style.color="white";   
      divRef.current.style.backgroundColor="black";
      divRef.current.style.color="white";
      changStyle({border:"2px solid #736CED"})
    }
    else{ 
      headRef.current.style.backgroundColor="white";
      headRef.current.style.color="navy";
      mainRef.current.style.backgroundColor="white";
      mainRef.current.style.color="black";
      divRef.current.style.backgroundColor="white";
      divRef.current.style.color="black";
      changStyle({border:"2px solid black"})
    }
  },[theme])
  return (
    <div>
    <header ref={headRef}>
      <h1 className='home-h1'>Home Page</h1>
    </header>
    <main id="hero" ref={mainRef} >
      <h2>lorem ipsum</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, odio. Doloribus fugit repellendus officiis facilis dolore, ratione similique, quis labore tempora placeat incidunt optio tenetur neque hic eveniet et illo!</p>
    </main>
    <div className="projects" ref={divRef}>
      <div style={style}>
        <h2>project 1</h2>
        <p>Lorem, ipsum.</p>
        <Link to="/project1">visit</Link>
      </div>
      <div style={style}>
        <h2>project 2</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <Link to="/project2">visit</Link>
      </div>
      <div style={style}>
        <h2>project 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quia?</p>
        <Link >visit</Link>
      </div>
      <div style={style}>
        <h2>project 4</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore!</p>
        <Link >visit</Link>
      </div>
    </div>
    </div>
  )
}

export default Home;