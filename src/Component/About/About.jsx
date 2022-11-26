import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Star from '../Star/Star'
import "./about.css";

export default function About() {
  return (
    <div className="container-fluid about p-5">
    <div className="about-head ">
        <h2>About</h2>
        <Star/>
    </div>
  <div className="container about-content my-3">
    <div className="row">
      <div className="col-md-6 ml-auto">
        <p className='lead'>
          Freelancer is a free bootstrap theme created by Route. The
          download includes the complete source files including HTML,
          CSS, and JavaScript as well as optional SASS stylesheets for
          easy customization.
        </p>
      </div>
      <div className="col-md-6 mr-auto">
        <p className='lead'>
          You can create your own custom avatar for the masthead, change
          the icon in the dividers, and add your email address to the
          contact form to make it fully functional!
        </p>
      </div>
    </div>
  </div>
</div>
  )
}
