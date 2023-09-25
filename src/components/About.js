import React from "react";
import image4 from "../assets/about-image.png";
import image2 from "../assets/image2.jpg";

const About = () => {
    return <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={image4} alt="" />
        </div>
        {/* <div className="about-section-image-container">
        <img src={image2} alt="" />
        </div> */}
        <div className="about-section-text-container">
            <p className="primary-subheading">
                    About
            </p>
            <h1 className="primary-heading">
                Tropical bank limited since 1973
            </h1>
            <p className="primary-text">
            Banners should not be expandable, flickering, noisy, or disturbing in any way. 
            </p>
            <p className="primary-text">
            Banners should not be expandable, flickering, noisy, or disturbing in any way. 
            </p>
            <div className="about-buttos-container">
                <button className="secondary-button">
                    Learn more
                </button>

            </div>

        </div>

    </div>
};

export default About;