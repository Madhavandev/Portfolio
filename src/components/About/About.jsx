import React from 'react';
import "./About.css";
import images from "../../constants/images";
import {about_stats} from "../../constants/data";

const About = () => {

  return (
    <div className='about section-p' id="about">
        <div className='container'>
            <div className='about-content'>
                <div className='about-grid grid'>
                    <img src = {images.About_Alex} alt = "" className='about-img mx-auto' />
                    <div className='section-title'>
                        <h3 className='text-brown'>I'm <span className='text-dark'>Madhavan</span></h3>
                        <p className='text mx-auto'>I am a full-stack developer with a comprehensive skillset that bridges the gap between front-end and back-end development. I excel in crafting beautiful user interfaces with HTML, CSS, and JavaScript, while also building robust and secure server-side solutions using languages like Node JS and frameworks like Express JS.</p>
                    </div>
                </div>

                <div className='about-grid about-box flex'>
                    {
                        about_stats.map((about_stat, index) => {
                            return (
                                <div className='about-item text-center flex' key = {index}>
                                    <div className='about-item-icon'>
                                        <img src = {about_stat.image} alt = "" />
                                    </div>
                                    <div className='about-item-text text-left'>
                                        <h3 className='fs-24 ls-2'>{about_stat.value}</h3>
                                        <p className='text'>{about_stat.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default About