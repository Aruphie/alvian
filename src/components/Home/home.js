import React from "react";
import Navbar from "./Navbar/navbar";
import './home.css'

function Home() {
    return (
        <section class='Home'>
            <Navbar/>
            <div class='content'>
                <h1>Welcome to my website!</h1>
                <p>this is my website</p>
                <button>get started</button>
            </div>
        </section>
    );
};

export default Home;