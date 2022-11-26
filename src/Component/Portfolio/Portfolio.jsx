import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./portfolio.css";
import { DarkStar } from '../Star/Star';
import cabin from './cabin.png'
import cake from './cake.png'
import circus from './circus.png'
import game from './game.png'
import safe from './safe.png'
import submarine from './submarine.png'
import ClosePort from '../ClosePort/ClosePort';
import Card from '../CardPort/Card';

export default class Portfolio extends Component {
  state={
    layers:[
      {id: "logCabin", name: "cabin", img: cabin , label: "Log Cabin" },
      {id: "tastyCake",  name: "cake", img: cake, label:"Tasty Cake"},
      {id: "circusTent",  name: "circus", img: circus, label:"Circus Tent"},
      {id: "controller",  name: "game", img: game, label:"Controller"},
      {id: "lockedSafe",  name: "safe", img: safe, label:"Locked Safe"},
      {id: "submarine",  name: "submarine", img: submarine, label:"Submarine"}
    ]
  };
  render() {
    return <>
          <div className="container portfolio py-5">
          <div className="head py-2">
            <h2>Portfolio</h2>
            <DarkStar/>
          </div>
          <div className="row">
            {this.state.layers.map((layer,index)=> <Card lyr={layer} key={index} id={index}/> )}
            
          </div>
        </div>

        {this.state.layers.map((layer,index)=> <ClosePort cardc = {layer} key={index} id={index}/>)}
    </>
  }
}

