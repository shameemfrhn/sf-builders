import React from "react";
import './App.css'

const Header = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <div to="/">Home</div>
                    </li>
                    <li>
                        <div to="/about">About</div>
                    </li>
                    <li>
                        <div to="/service">Service</div>
                    </li>
                    <li>
                        <div to="/projects">Projects</div>
                    </li>
                    <li>
                        <div to="/team">Team</div>
                    </li>
                    <li>
                        <div to="/contact">Contact</div>
                    </li>
                    <li>
                        <div className='read' to="/">Read more</div>
                    </li>
                </ul>
                
            </nav>
        </header>

    )
}

export default Header