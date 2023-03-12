import React from 'react';
import "../styles/slider.css";

const Slider = ({ imageSrc, title, subtitle, flipped }) => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });



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
                    <div className="sliderContent">
                        <h1 className="sliderTitle">{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <img src={imageSrc} alt="abstract lines" className="sliderImage" />
                </>
            );
        }
    };

    return <div className="slider">{renderContent()}</div>;
};

export default Slider