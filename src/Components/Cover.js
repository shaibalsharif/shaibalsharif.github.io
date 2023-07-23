import React from 'react'

import { INTRODUCTION, SOCIALS, TITLE } from '../Util/data'


const Cover = () => {
  return (<section id="intro">
    <div className="intro-overlay"></div>
    <div className="intro-content">
      <div className="row">
        <div className="col-twelve">
          <h5>Hello, World.</h5>
          <h1>{INTRODUCTION.profile.content.fullname}</h1>
          <p className="intro-position">
            {TITLE.map(el=><span>{el}</span>)}   
            <span>UI/UX Designer</span>
          </p>
          <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
        </div>
      </div>
    </div>
    <ul className="intro-social">
      {SOCIALS.map(el=>{
        return (<li><a href={el.link}><i className={`${el.icon}`}></i></a></li>)
      })}
    </ul>

  </section>
  )
}

export default Cover