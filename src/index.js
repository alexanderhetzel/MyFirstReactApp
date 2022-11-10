import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
    return (
        <header>
            <nav>
                <img src="./logo512.png" width="40px" alt=""/>
            </nav>
        </header>
    )
}

function Navbar() {
    return (
        <div>
            <h1>React</h1>
            <ol>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>@ 2022 Hetzel Development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Page/>)
