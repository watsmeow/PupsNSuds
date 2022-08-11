import React from 'react';
import './Sizes.css';
import bigDog from '../../assets/bigDog.jpg';
import mediumDog from '../../assets/mediumDog.jpg';
import smallDog from '../../assets/smallDog.jpg';
import rArrow from '../../assets/rightArrow.png';


const Sizes = () => {
    const sizesData = [
    {
        name: "SMALL FRIENDS",
        weight: "Under 25lbs",
        image: smallDog,
    },
    {
        name: "MIDDLEWEIGHT CHAMPS",
        weight: "25lbs to 75lbs",
        image: mediumDog,
    },
    {
        name: "LARGER THAN LIFE",
        weight: "Over 75lbs",
        image: bigDog,
    },
    ];

  return (
    <div className='sizes-container' id='sizes'>
        <div className='sizes-header'>
            <span>How much</span>
            <span className='stroke-text'>fur</span>
            <span>are you made of?</span>
        </div>
        {/* sizes cards */}
        <div className="sizes">
            {sizesData.map((sizes) => 
                <div className="size">
                    <span>{sizes.name}</span>
                    <img src={sizes.image} alt="" />
                    <span>{sizes.weight}</span>
                </div> 
            )}
        </div>
    </div>
  )
}

export default Sizes