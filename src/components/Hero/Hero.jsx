import React from 'react';
import './Hero.css'
import heroImage from '../../assets/hero_image.jpg';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
  const transition = {type: 'spring', duration: 3}
  return (       
    <div className='hero' id='hero'>
        <div className='left-h'>
            {/* ad */}
            <div className="ad">
                <motion.div initial={{left: '292px'}} 
                whileInView={{left: '8px'}}
                transition={transition}>

                </motion.div>
                <span>A stress-free grooming experience</span>
            </div>
            {/* hero heading */}
            <div className="hero-text">
                <div>
                    <span>Your Pup,         
                        <br></br>Squeaky </span>
                    <span className='stroke-text'>Clean</span>                
                    <div>
                        <span>Making bath time fun and easy for you and your best furry friend.</span>
                    </div>
                </div>
            {/* figures */}
                <div className='figures'>
                    <div>
                        <span><NumberCounter end={3} start={0} delay='1'></NumberCounter></span>
                        <span>Locations</span>
                    </div>
                    <div>
                        <span><NumberCounter end={12} start={0} delay='1.5'></NumberCounter></span>
                        <span>Expert Groomers</span>
                    </div>
                    <div>
                        <span><NumberCounter end={500} start={0} delay='2' preFix='+'></NumberCounter></span>
                        <span>Pups Served</span>
                    </div>
                </div>
            </div>
            {/* hero buttons */}
            <div className="hero-buttons">
                <button className='button'>Make Appointment</button>
                <button className='button' id='learn-more'>Learn More</button>
            </div>
        </div>
        <div className='right-h'>
        <section class="bubble-holder"> 
  <div class="bubble-1 bubble-container bubble-animation-x">
    <div class="bubble-large bubble-animation-y"></div>
  </div>

  <div class="bubble-2 bubble-container bubble-animation-x">
    <div class="bubble-large bubble-animation-y"></div>
  </div>

  <div class="bubble-3 bubble-container bubble-animation-x">
    <div class="bubble-large bubble-animation-y"></div>
  </div>
  
  <div class="bubble-4 bubble-container bubble-animation-x">
    <div class="bubble-small bubble-animation-y"></div>
  </div>
  
   <div class="bubble-5 bubble-container bubble-animation-x">
    <div class="bubble-small bubble-animation-y"></div>
  </div>
  
   <div class="bubble-6 bubble-container bubble-animation-x">
    <div class="bubble-small bubble-animation-y"></div>
  </div>
  
  <div class="bubble-7 bubble-container bubble-animation-x">
    <div class="bubble-small bubble-animation-y"></div>
  </div>
  
  <div class="bubble-8 bubble-container bubble-animation-x">
    <div class="bubble-small bubble-animation-y"></div>
  </div>
  
   <img src={heroImage} alt="" id='hero-image' />
</section>

        </div>
    </div>
  )
}

export default Hero