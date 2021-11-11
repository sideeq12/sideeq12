// importing libraries
import React from "react"
import Sodiq from "./cover.png"
import {BrowserRouter as Router , Link} from "react-router-dom"

// importing images
import award from "./white-award.svg" 
import bar from "./white-bar.svg" 
import suit from "./white-case.svg" 
import house from "./white-house.svg" 
import chat from "./white-chat.svg" 
import book from "./white-book.svg" 
// import Logo from "./Sodiq.jpg"


const styleNav={
    color: "white",
    textDecoration : "none"
}
const NavBar = ()=>{
    return (
        <div className="nav">
            <div className="imageSection">
                <img src={Sodiq} />
            </div>
            <ul>
            <Link to="/" style={styleNav}>
                <li>
                    <img  src={house} />
                   <label> Profile</label>
                    </li>
                    </Link>
                    <Link to="/experience" style={styleNav}>
                <li>
                <img  src={book} /><label>History</label>
                </li>
                </Link>
                <Link to="/Project" style={styleNav}>
                <li>
                <img  src={award} /><label>Projects</label></li>
                </Link>
                <Link to="/About" style={styleNav}>
                    <li>
                <img  src={suit} /><label>About</label></li>
                </Link>
                <Link to="/Contact" style={styleNav}>
                <li>
                <img  src={chat} /><label>Contact</label></li>
                </Link>
            </ul>
        </div>
    )
}
export default NavBar;