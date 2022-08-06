import React, { useEffect, useState } from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)  
    let slideInterval;
    let intervalTime = 3000;
    const len = dataSlider.length
  
    const autoScroll = true;

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
      }

    useEffect(() => {
        setSlideIndex(1);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [slideIndex]);

    return (
        <>
            <div className="container-slider ">
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                            key={obj.id}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                            <img
                                src={obj.img}
                            />
                        </div>
                    )
                })}
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                <div className="container-dots">
                    {dataSlider.map((obj, index) => (
                        <div
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
            </div>

        </>
    )
}