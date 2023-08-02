import React from 'react'
import { STATS } from '../Util/data'

const Stats = () => {
  return (
    <section id="stats" className="count-up">
    <div className="row">
      <div className="col-twelve">
        <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">
         
         {STATS.map(el=>{
          return (<div className="bgrid stat">
          <div className="icon-part">
            <i className={el.icon} />
          </div>
          <h3 className="stat-count">{el.count}</h3>
          <h5 className="stat-title">{el.text}</h5>
        </div>)
         })}
          
          {/* /stat */}
        </div>
        {/* /stats-list */}
      </div>
      {/* /twelve */}
    </div>
    {/* /row */}
  </section>
  
  )
}

export default Stats