import React from 'react'
import { SERVICES } from '../Util/data'

const Services = () => {
  return (
    <section id="services">
    <div className="overlay" />
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>{SERVICES.title}</h5>
        <h1>{SERVICES.main}</h1>
        <p className="lead">
         {SERVICES.description}
        </p>
      </div>
    </div>
    {/* /section-intro */}
    <div className="row services-content">
      <div id="owl-slider" className="owl-carousel services-list">
      
      {SERVICES.content.map(el=>{
        return(<div className="service">
        <span className="icon">
          <i className={el.icon} />
        </span>
        <div className="service-content">
          <h3>{el.title}</h3>
          <p className="desc">
            {el.description}
          </p>
        </div>
      </div>)
      })}
      </div>
      {/* /services-list */}
    </div>
    {/* /services-content */}
  </section>
  
  )
}

export default Services