import React from "react";
import Navbar from "./Navbar";
import background from "../assets/background.png";
import lady from "../assets/lady.png";

const Home = () => {
    return <div className ="home-container">
        <Navbar />
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={background} alt=" "/>
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                Welcome to your File share
                </h1>
                  <p>Top banners are 728x90 pixels and should not exceed 35Kb in size. 
                      </p> 
                <button className="secondary-button">
                    Let's get started
                </button>
            </div>
            {/* <div className="home-image-container">
                <img src={lady} alt="" />
            </div> */}
        </div>

    </div>
};

export default Home;