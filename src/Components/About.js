import React from 'react'
import profile_pic from '../images/profile-pic.jpg'
import { INTRODUCTION } from '../Util/data'
const About = () => {
  return (
    <section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>{INTRODUCTION.title}</h5>
          <h1>{INTRODUCTION.main}</h1>
          <div className="intro-info">
            <img src={profile_pic} alt="Profile Picture" />
            <p className="lead">{INTRODUCTION.description}</p>
          </div>
        </div>
      </div>
      {/* /section-intro */}
      <div className="row about-content">
        <div className="col-six tab-full">
          <h3>{INTRODUCTION.profile.title}</h3>
          <p>
            {INTRODUCTION.description}
          </p>
          <ul className="info-list">
             {Object.entries(INTRODUCTION.profile.content).map(el=>{
              return (<li>
                <strong>{el[0]}:</strong>
                <span>{el[1]}</span>
              </li>)
             })}
            
          
          </ul>
          {/* /info-list */}
        </div>
        <div className="col-six tab-full">
          <h3>{INTRODUCTION.skills.title}</h3>
          <p>{INTRODUCTION.skills.description}</p>
          <ul className="skill-bars">
          {Object.entries(INTRODUCTION.skills.content).map(el=>{
              return (<li>
                <div className={`progress percent${el[1].split('%')[0]}`}>
                  <span>{el[1]}</span>
                </div>
                <strong>{el[0]}</strong>
              </li>)
             })}
           
          </ul>{" "}
          {/* /skill-bars */}
        </div>
      </div>
      <div className="row button-section">
        <div className="col-twelve">
          <a
            href="#contact"
            title="Hire Me"
            className="button stroke smoothscroll"
          >
            Hire Me
          </a>
          <a href="#" title="Download CV" className="button button-primary">
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About