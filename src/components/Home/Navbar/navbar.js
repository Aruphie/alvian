import React from "react";
import './navbar.css'

function Navbar() {
    return (
        <div class='bg'>
        <div class='navbar'>
            <div class='logo'>
                <h1>PRO<span>JECT</span></h1>
            </div>
            <div class='navigate'>
                <ul>
                    <li><b><a href="#">HOME</a></b></li>
                    <li><b><a href="#">ABOUT</a></b></li>
                    <li><b><a href="#">PROJECT</a></b></li>
                    <li><b><a href="#">CONTACT</a></b></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navbar;