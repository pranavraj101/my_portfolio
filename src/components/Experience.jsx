import React from 'react';
import gradiantbackground from '../images/Gradient.png';
import work1 from '../images/work1.png';
import skills from '../images/Skills (2).png';

const Experience = () => {
    const getRandomGradient = () => {
        // Function to generate a random gradient
        const colorStops = [
            '#130428',
            '#251043',
            '#38126D',
            '#261045',
            '#190634',
          ];
      
          // Create a linear gradient string
          const gradient = `linear-gradient(110deg, ${colorStops.join(', ')})`;
      
        return gradient;
    };

  return (
    <>
    <div className='experience' style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={gradiantbackground} style={{ position: 'absolute', width:'80vw', zIndex: '-1' }} alt="Gradient Background" />
      <div style={{ zIndex: '1', color: '#fff' }}>
        <div style={{ fontSize: '40px', paddingTop: '50px', paddingLeft: '5%' }}>
          Work Experience
        </div>
        <br />
        <div className='experience-blocks'>
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className='workblock' style={{ background: getRandomGradient()}}>
              <img src={work1} alt={`Work ${index}`} style={{ height: '100px' }} />
              <div style={{ paddingLeft: '10px' }}>
                <div style={{ fontSize: '26px' }}>CIB on the Mobile</div>
                <div style={{ fontSize: '8px' }}>Take your client onboard seamlessly by our amazing tool of digital onboard process.</div>
                <div className='workbtn'>LEARN MORE</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
    <img src={skills} style={{width:"80%", backgroundColor:"#11071F", paddingLeft:"10%",paddingRight:"10%", paddingBottom:"10px"}} />
    </>
  );
};

export default Experience;
