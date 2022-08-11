import React, { useState } from 'react';
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData';
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';
import {motion} from 'framer-motion';

const Testimonials = () => {
    const transition = {type: 'spring', duration: 3}
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

  return (
    <div className='testimonials' id='testimonials'>
        <div className="left-t">
            <span>Testimonials</span>
            <span>What they're</span>
            <span className='stroke-text'>barking about</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span style={{color: 'var(--aqua)', fontStyle: 'italic'}}>
                - {testimonialsData[selected].name}
            </span>
            {testimonialsData[selected].status}
        </div>
        <div className="right-t">
            <motion.div 
            initial={{opacity: 0, x: -100}} 
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, duration: 2}}>

            </motion.div>
            <motion.div 
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, duration: 2}}>

            </motion.div>
            <motion.img
            key={selected} 
            initial={{opacity: 0, x: 100}} 
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            id="doggo" src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img 
                onClick={() => {selected === 0 
                ? setSelected(tLength -1)
                : setSelected((prev) => prev - 1);
                }}
                src={leftArrow} alt="" />
                <img 
                onClick={() => {selected === tLength-1 
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
                }}
                src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials