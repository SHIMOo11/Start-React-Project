import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { DarkStar } from '../Star/Star';
import './close.css'

export default class ClosePort extends Component {
  render() {
    let { id, name, img, label } = this.props.cardc;
    return <>
          <div className="modal fade my-modal" id={id} tabIndex="-1" aria-labelledby="logCabin" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="d-flex justify-content-end">
                <button type="button"  className=" m-3 close " data-bs-dismiss="modal" >
                {/* aria-label="Close"  */}
                {/* btn-close */}
                <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="modal-body px-5">
                <div className="modal-headding">
                  <h2 className="modal-title modal-label" id={id}>
                    {label}
                  </h2>
                  <DarkStar/>
                </div>

                <div className="image-modal">
                  <img src={img} alt={name} className="w-100 modal-image" />
                </div>

                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  neque quae odit deserunt harum obcaecati, molestias suscipit
                  sint, ipsam illo optio perspiciatis? Modi vitae est eos
                  adipisci at autem ipsum.
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center ">
                <button type="button" className="btn modal-btn mb-3" data-bs-dismiss="modal">
                  <i className="fa-solid fa-xmark"></i> Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
    
    </>

    
  }
}
