import React, { useState } from 'react'


import { PORTFOLIO } from '../Util/data'



const Portfolio = () => {


  const [modalContent, setModalContent] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleItemClick = (item) => {
    setModalContent(item)
    setIsOpen(true)
  }


  return (
    <section id="portfolio">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>{PORTFOLIO.title}</h5>
          <h1>{PORTFOLIO.main}</h1>
          <p className="lead">
            {PORTFOLIO.description}
          </p>
        </div>
      </div>
      {/* /section-intro*/}
      <div className="row portfolio-content">
        <div className="col-twelve">
         
          <div id="folio-wrapper" className="gap-0 md:columns-2 w-full relative ">
            {!isOpen && PORTFOLIO.content.map((el) => {
              return (
                <a  href ='#folio-wrapper' className="bgrid folio-item h-2/3" onClick={(e) =>   handleItemClick(el)}>
                  <div className="">
                    <img src={el.photo} alt={el.title} />
                    <a className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">{el.title}</h3>
                          <span className="folio-types">{el.sub}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </a>
              )
            })}


            {(isOpen && modalContent) ?
              (<div id={modalContent.modalid} className="popup-modal slider mfp-hide absolute top-20 z-20 h-screen w-screen ">
                <div className="media">
                  <img src={modalContent.photo_m} alt={modalContent.title} />
                </div>
                <div className="description-box">
                  <h4>{modalContent.title}</h4>
                  <p>
                    {modalContent.description}
                  </p>
                  <div className="categories">{modalContent.sub}</div>
                </div>
                <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a className="popup-modal-dismiss" onClick={() => {
                    setIsOpen(false)
                  }}>
                    Close
                  </a>
                </div>
              </div>)
              : <></>}


          </div>

        </div>

      </div>

    </section>

  )
}

export default Portfolio