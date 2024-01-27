import React from 'react';
import gradiantbackground from '../images/Gradient.png';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact-us'>
      <div className='contact-heading'>
        <h1>Let's Colab</h1>
      </div>
      <img src={gradiantbackground} style={{ position: 'absolute', height:"100%", zIndex: '0', left:"20%", top:"10%" }} alt="Gradient Background" />
      <div style={{display:'flex', justifyContent:"space-between"}}>
        <div style={{width:"40%", paddingTop:"15%"}}>
          <div className='project-innerblock1'>
            I'm currently seeking to be part of a collaborative cross-functional team that prioritizes enhancing people's lives through intuitive and accessible software solutions.
            <br /> <br />
            {/* <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer"> */}
              <FaGithub style={{ marginRight: '10px' }} />
            {/* </a> */}
            {/* <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer"> */}
              <FaInstagram style={{ marginRight: '10px' }} />
            {/* </a> */}
            {/* <a href="mailto:sinhapranavraj10142@gmail.com"> */}
              <FaEnvelope style={{ marginRight: '10px' }} />
            {/* </a> */}
          </div>
        </div>
        <div className='contact-form'>
          <form>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' required />

            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />

            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' rows='4' required></textarea>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
