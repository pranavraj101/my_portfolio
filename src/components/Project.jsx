import React from 'react';
import project from '../images/project.png';
import gradiantbackground from '../images/Gradient.png';
import click from '../images/icon-park-solid_click.png';

const Project = () => {
  return (
    <div className='project'>
      <div >
        <div style={{ fontSize: '250%', paddingTop: '50px', paddingLeft: '5%' }}>
          My Projects
        </div>
        <br />
        <div className='project-blocks'>
          <div style={{width:"50%"}}>
            <div style={{fontSize:"180%", fontWeight:"600", width:"max-content"}}>
              Example Project
            </div>
            <div  className='project-innerblock1'>
              A web app for visualizing personalized Spotify data. View your
              top artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </div>
            <img src={click} className='project-click'/>
          </div>
          <div className='project-innerblock2'>
            <img src={gradiantbackground} className='project-bgr' style={{ position: 'absolute', height:"100%", zIndex: '-1'}} alt="Gradient Background" />
            <img src={project} className='project-img'/>
          </div>
        </div>
        <br />
        <div className='project-blocks'>
          <div style={{width:"50%"}}>
            <div style={{fontSize:"180%", fontWeight:"600", width:"max-content"}}>
              Example Project
            </div>
            <div  className='project-innerblock1'>
              A web app for visualizing personalized Spotify data. View your
              top artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </div>
            <img src={click} className='project-click'/>
          </div>
          <div className='project-innerblock2'>
            <img src={gradiantbackground} alt="Gradient Background" className='project-bgr' style={{ position: 'absolute', height:"100%", zIndex: '-1'}}/>
            <img src={project} className='project-img'/>
          </div>
        </div>
        <div className='project-blocks'>
          <div style={{width:"50%"}}>
            <div style={{fontSize:"180%", fontWeight:"600", width:"max-content"}}>
              Example Project
            </div>
            <div  className='project-innerblock1'>
              A web app for visualizing personalized Spotify data. View your
              top artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </div>
            <img src={click} className='project-click' />
          </div>
          <div className='project-innerblock2'>
            <img src={gradiantbackground} className='project-bgr' style={{ position: 'absolute', height:"100%", zIndex: '-1'}} alt="Gradient Background" />
            <img src={project} className='project-img'/>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Project
