import React from 'react'
import { RESUME } from '../Util/data'

const Resume = () => {
  return (
    <section id="resume" className="grey-section">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>{RESUME.title}</h5>
          <h1>{RESUME.main}</h1>
          <p className="lead">
            {RESUME.description}
          </p>
        </div>
      </div>
      {/* /section-intro*/}
      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>{RESUME.work.title}</h2>
        </div>
        {/* /resume-header */}
        <div className="col-twelve">
          <div className="timeline-wrap">
            {RESUME.work.content.map(el => {
              return (<div className="timeline-block">
                <div className="timeline-ico">
                  <i className={RESUME.work.icon} />
                </div>
                <div className="timeline-header">
                  <h3>{el.title}</h3>
                  <p>{el.duration}</p>
                </div>
                <div className="timeline-content">
                  <h4>{el.place}</h4>
                  <p>
                    {el.description}
                  </p>
                </div>
              </div>)
            })}
        
          </div>
          {/* /timeline-wrap */}
        </div>
        {/* /col-twelve */}
      </div>{" "}
      {/* /resume-timeline */}
      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>{RESUME.education.title}</h2>
        </div>{" "}
        {/* /resume-header */}
        <div className="col-twelve">
          <div className="timeline-wrap"> {RESUME.education.content.map(el => {
              return (<div className="timeline-block">
                <div className="timeline-ico">
                  <i className={RESUME.education.icon} />
                </div>
                <div className="timeline-header">
                  <h3>{el.title}</h3>
                  <p>{el.duration}</p>
                </div>
                <div className="timeline-content">
                  <h4>{el.place}</h4>
                  <p>
                    {el.description}
                  </p>
                </div>
              </div>)
            })}</div>
          {/* /timeline-wrap */}
        </div>
        {/* /col-twelve */}
      </div>
      {/* /resume-timeline */}
    </section>
  )
}

export default Resume