import React from 'react';
import './Reasons.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import whiteTick from '../../assets/whiteTick.png';

const Reasons = () => {
  return (
    <div className='reasons' id='reasons'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <div>
                <span className='stroke-text'>Why</span>
                <span> Choose us?</span>
            </div>
            <div className='details-r'>
                <div>
                    <img src={whiteTick} alt=""></img>
                    <span>Great groomers</span>
                </div>
                <div>
                    <img src={whiteTick} alt=""></img>
                    <span>Easy scheduling</span>
                </div>
                <div>
                    <img src={whiteTick} alt=""></img>
                    <span>Multiple locations</span>
                </div>
                <div>
                    <img src={whiteTick} alt=""></img>
                    <span>Fur-rific reputation</span>
                </div>
                <div>
                    <img src={whiteTick} alt=""></img>
                    <span>Hypoallergenic grooming solutions</span>
                </div>
                <div>
                    <img src={whiteTick} alt=""></img>
                    <span>Great value</span>
                </div>
                <div>
                    <img src={whiteTick} alt=""></img>
                    <span>We serve pups of all sizes and breeds</span>
                </div>
                <div>
                    <img src={whiteTick} alt=""></img>
                    <span>Satisfaction guaranteed</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reasons