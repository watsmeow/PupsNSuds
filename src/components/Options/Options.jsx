import React from 'react';
import './Options.css';
import {optionsData} from '../../data/optionsData'
import rArrow from '../../assets/rightArrow.png'

const Options = () => {
  return (
    <div className='options' id='options'>
        {/* options header  */}
        <div className="options-header">
            <span className='stroke-text'>Expore our</span>
            <span>Options</span>
            <span className='stroke-text'>to look furtastic</span>
        </div>
        <div className="option-categories">
            {optionsData.map((option) => (
               <div className="category">
                <span>{option.heading}</span>
                <span>{option.details}</span>
                <span>Price: {option.price}</span>
               </div> 
            ))}
        </div>
    </div>
  );
}

export default Options