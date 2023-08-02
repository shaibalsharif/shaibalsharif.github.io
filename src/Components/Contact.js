import React from 'react'
import { CONTACT, CONTACT_DETAILS } from '../Util/data'

const Contact = () => {
  return (
    <section id="contact">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>{CONTACT.title}</h5>
          <h1>{CONTACT.main}</h1>
          <p className="lead">
            {CONTACT.description}
          </p>
        </div>
      </div>
      {/* /section-intro */}
      <div className="row contact-form">
        <div className="col-twelve">
          {/* form */}
          <form name="contactForm" id="contactForm" method="post" action="">
            <fieldset>
              {CONTACT.content.map(el => {

                return (<div className="form-field">
                  <input
                    name={el.name}
                    type={el.type}
                    id={`contact-${el.name}`}
                    placeholder={el.name}
                    defaultValue=""
                    minLength={2}
                    required=""
                  />
                </div>)
              })}

              <div className="form-field">
                <button className="submitform">Submit</button>
                <div id="submit-loader">
                  <div className="text-loader">Sending...</div>
                  <div className="s-loader">
                    <div className="bounce1" />
                    <div className="bounce2" />
                    <div className="bounce3" />
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
          {/* Form End */}
          {/* contact-warning */}
          <div id="message-warning"></div>
          {/* contact-success */}
          <div id="message-success">
            <i className="fa fa-check" />
            Your message was sent, thank you!
            <br />
          </div>
        </div>
        {/* /col-twelve */}
      </div>
      {/* /contact-form */}
      <div className="row contact-info">

        {Object.values(CONTACT_DETAILS)?.map(el => (<div className="col-four tab-full">
          <div className="icon">
            <i className={el.icon} />
          </div>
          <h5>{el.title}</h5>
          <p>{el.content.map(item => {
            return (<>
            {item}
              <br/>
            </>)

          })}
          </p>

        </div>))}
      </div>
      {/* /contact-info */}
    </section>

  )
}

export default Contact