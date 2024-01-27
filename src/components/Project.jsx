import React from 'react';
import project from '../images/project.png';
import gradiantbackground from '../images/Gradient.png';
import click from '../images/icon-park-solid_click.png';

const Project = () => {
  return (
    <div className='project'>
      <div >
        <div style={{ fontSize: '40px', paddingTop: '50px', paddingLeft: '5%' }}>
          My Projects
        </div>
        <br />
        <div className='project-blocks'>
          <div style={{width:"50%"}}>
            <div style={{fontSize:"30px", fontWeight:"600"}}>
              Example Project
            </div>
            <div  className='project-innerblock1'>
              A web app for visualizing personalized Spotify data. View your
              top artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </div>
            <img src={click} style={{height:"6%", padding:"5%"}} />
          </div>
          <div className='project-innerblock2'>
            <img src={gradiantbackground} style={{ position: 'absolute', height:"150%", zIndex: '-1', left:"-150px", top:"-100px" }} alt="Gradient Background" />
            <img src={project} style={{height:"80%", left:"-10%"}}/>
          </div>
        </div>
        <br />
        <div className='project-blocks'>
          
          <div className='project-innerblock2'>
            <img src={gradiantbackground} style={{ position: 'absolute', height:"150%", zIndex: '-1', left:"-150px", top:"-100px" }} alt="Gradient Background" />
            <img src={project} style={{height:"95%"}}/>
          </div>
          <div style={{width:"50%"}}>
            <div style={{fontSize:"30px", fontWeight:"600"}}>
              Example Project
            </div>
            <div  className='project-innerblock1' style={{left:"-10%"}}>
              A web app for visualizing personalized Spotify data. View your
              top artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Project
