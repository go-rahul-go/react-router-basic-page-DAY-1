import { NavLink } from "react-router-dom";
import React from "react";



const Navbar = () => {
    return (
        <nav className="navigation">
            <NavLink  className={({isActive})=>(isActive?"active":"inactive")} to="/">Home</NavLink>
            <NavLink className={({isActive})=>(isActive?"active":"inactive")} to="/about">About us</NavLink>
            <NavLink className={({isActive})=>(isActive?"active":"inactive")} to="/contact">Contact</NavLink>
        </nav>
    )
}

export default Navbar;