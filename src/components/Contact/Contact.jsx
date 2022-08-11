import React, {useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ayjrtgd', 'template_1dqy705', form.current, 'JzILxXhuieP5IqxlP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='contact' id='contact-us'>
        <div className="left-c">
            <div>
                <span className='stroke-text'>Get squeaky clean</span>

                <span>Reach out today</span>
            </div>
        </div>
        <div className="right-c">
            <form action="" ref={form} id="contact-form" className="contact-us" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Email Address' />
                <button className='button'>Email Us</button>
            </form>
        </div>
    </div>
  )
}

export default Contact