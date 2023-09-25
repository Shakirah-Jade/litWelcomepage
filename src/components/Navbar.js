import React, { useState } from "react";
import logo from "../assets/logo.jpg";
/////////////imports missing //////////////


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions =[
        {
            text: "Home",
            // icon: <HomeIcon />,
        },
        {
            text: "About",
            // icon: <HomeIcon />,
        },
        {
            text: "Contact",
            // icon: <HomeIcon />,
        },
        {
            text: "Login",
            // icon: <HomeIcon />,
        },
        {
            text: "Signup",
            // icon: <HomeIcon />,
        },
    ];



    return <nav>
        {/* <div className="nav-logo-container">
            <img src ={logo} alt =""/>
        </div> */}
        <div className="navbar-links-container">
            <a href=" ">Home</a>
            <a href=" ">About</a>
            <a href=" ">Contact</a>
            <a href=" ">Login</a>
            <a href=" ">Signup</a>
        </div>
    </nav>
};

export default Navbar;