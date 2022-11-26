import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    let {id , name, img} = this.props.lyr;
    return (
      <div className="col-md-4">
      <div className="mylayer">
        <img src={img} className="w-100" alt={name} />
        <div className="card-layer" data-bs-toggle="modal" data-bs-target={'#' + id}>
          <i className="fa-solid fa-plus text-light"></i>
        </div>
      </div>
    </div>
    )
  }
}

