import React, { useContext, useEffect,useRef } from 'react'
import { ThemeContext } from '../App';
const About = () => {
  const styleRef=useRef();
  const theme=useContext(ThemeContext);
  

  useEffect(()=>{
    if(theme==="dark")
    {
      styleRef.current.style.backgroundColor="#262626";
      styleRef.current.style.color="white";
      styleRef.current.style.height="100vh"
    }
    else{
      styleRef.current.style.backgroundColor="white";
      styleRef.current.style.color="black";
      styleRef.current.style.height="100vh"
    }
  },[theme])
  return (
    <div ref={styleRef} >
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam neque voluptas inventore praesentium nesciunt, quam fugit maiores fugiat! Natus odit id doloribus aliquam. Sint, quasi alias. Nihil, quibusdam nam!</p>
    </div>
  )
}

export default About;