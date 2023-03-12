import React from 'react';
import "../styles/slider.css";

const Slider = ({ imageSrc, title, subtitle, flipped }) => {
    const renderContent = () => {
        if (!flipped) {
            return (
                <>
                <img src={imageSrc} alt="abstract lines" className="sliderImage" />
                <div className="sliderContent">
                    <h1 className="sliderTitle">{title}</h1>
                    <p>{subtitle}</p>
                </div>
                </>
            );
        } else {
            return (
                <>
                <img src={imageSrc} alt="abstract lines" className="sliderImage" />
                <div className="sliderContent">
                    <h1 className="sliderTitle">{title}</h1>
                    <p>{subtitle}</p>
                </div>
                </>
            );
        }
    };

    return <div className="slider">{renderContent()}</div>;
};

export default Slider