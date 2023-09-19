import React, { useState,useRef } from 'react'
const style={
    width:"25px",
    height:"25px",
    position:"absolute",
    top:"1px",
    left:"1px",
    border:"1.5px solid black",
    borderRadius:"50%",
    zIndex:"-1",
   

}
const ThemeToggle = ({getTheme}) => {
    const [newStyle,changeStyle]=useState(style)
    const lighthide=useRef();
    const darkhide=useRef();
    const bgColor=useRef();
    const light = ()=>{
        darkhide.current.style.visibility="visible"
        changeStyle({...newStyle,left:"40%"})
        lighthide.current.style.visibility="hidden"
        bgColor.current.style.backgroundColor="yellow";
        getTheme("dark")
    }
    const dark = ()=>{
        lighthide.current.style.visibility="visible"
        changeStyle({...newStyle,left:"1px"});
        darkhide.current.style.visibility="hidden"
        bgColor.current.style.backgroundColor="rgb(0, 208, 255)"
        getTheme("light")
     
    }
    
    return (
        <div className='theme-box' ref={bgColor}>
            <button style={newStyle}></button>
            <div onClick={light}><i class="fa-regular fa-sun" ref={lighthide}></i></div>
            <div onClick={dark}><i class="fa-regular fa-moon" ref={darkhide} style={{visibility:"hidden"}}></i></div>
        </div>
    )
}

export default ThemeToggle;