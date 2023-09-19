import React,{useContext,useRef,useEffect} from 'react'
import { ThemeContext } from '../App';
const Project2 = () => {
  const theme=useContext(ThemeContext);
  const styleRef=useRef();
  
  

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
    <div ref={styleRef}>
        <h1>project 2</h1>
    </div>
  )
}

export default Project2;