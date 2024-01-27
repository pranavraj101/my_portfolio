import React, { useState, useEffect } from 'react';
import image from '../images/image 1.png';
import gradient from '../images/Gradient.png';
import arrow from '../images/Arrow.png';

const Home = () => {
  const jobTitles = [
    'Software Engineer',
    'Full Stack Developer',
    'Front End Developer',
    'Back End Developer',
    'DevOps Engineer',
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentTitle = jobTitles[textIndex];
      setCurrentText((prevText) => {
        return prevText.length === currentTitle.length ? '' : currentTitle.substring(0, prevText.length + 1);
      });

      if (currentText.length === currentTitle.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTextIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        }, 500); // Delay before deleting
      }
    }, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [textIndex, currentText]);

  return (
    <div className='home' style={{ position: 'relative' }}>
      <div style={{ display: 'flex', position: 'absolute', paddingLeft: '150px' }}>
        <img src={arrow} alt="Arrow" style={{ height: '80px' }} />
        <div style={{ fontSize: '15px', paddingTop: '10px', color: '#fff', fontFamily: 'Preahvihear' }}>
          Hello! I am <span style={{ color: '#7127BA' }}>Pranav Raj</span>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div>
          <img src={gradient} alt="Gradient" style={{ height: '300px', position: 'absolute', zIndex: '-1' }} />
          <img src={image} alt="Image" style={{ height: '200px', zIndex: '1', paddingTop: '40px', paddingLeft: '60px' }} />
        </div>
        <div className='home-text'>
          <div style={{ fontSize: '15px', fontWeight: '400' }}> A Developer who</div>
          <div style={{ fontSize: '40px' }}>
            Crafts magic with <span style={{ color: '#7127BA' }}>code</span>...
          </div>
          <div style={{ fontSize: '12px' }}> Because every line of code tells a story, and I'm here to narrate tales of innovation and functionality.</div>
        </div>
      </div>
      <div className='home-text'>
        <div style={{ fontSize: '50px' }}>
          I'm a {currentText}
        </div>
        <div style={{ fontSize: '12px' }}>
          Currently, I'm an Application Developer at Wizphys.IO
        </div>
        <br />
        <div style={{width:"55vw"}}>
        🌐 Greetings, fellow wanderers of the binary wilderness! 🚀 I'm your guide through the realms of code, a software sorcerer conjuring digital magic. Dive into my portfolio and witness the spells of innovation cast in every line of code. 🪄✨ Unleash the power of technology and join me on this epic journey where each keystroke is a step into the future! 💻🔮🌟        
        </div>
      </div>
    </div>
  );
};

export default Home;
