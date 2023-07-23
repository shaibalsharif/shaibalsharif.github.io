import React from 'react'

const Footer = () => {
  return (
    <footer>
  <div className="row">
    <div className="col-six tab-full pull-right social">
      <ul className="footer-social">
        <li>
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-behance" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-dribbble" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
    <div className="col-eight tab-full">
      <div className="copyright">
        <span>© Copyright 2018 </span>
        <span>
          Design by <a href="http://www.styleshout.com/">styleshout</a>
        </span>
        <span>
          Distributed by <a href="https://themewagon.com/">themewagon</a>
        </span>
      </div>
    </div>
    <div id="go-top">
      <a className="smoothscroll" title="Back to Top" href="#top">
        <i className="fa fa-long-arrow-up" />
      </a>
    </div>
  </div>{" "}
  {/* /row */}
</footer>

  )
}

export default Footer