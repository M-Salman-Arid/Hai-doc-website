import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

export default function Header() {
    return (
        <header>
            <p>Hai
                <span className="Doc-style">Doc</span>
            </p>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/product">Product</NavLink>
                <NavLink to="/about-us">About US</NavLink>
            </nav>
            <button>Register</button>
        </header>
    )
}