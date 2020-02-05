import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Header extends Component {
  render(){
    return(
      <header>
        <div className="container">
          <div className="brand">KeepTruckin Artists</div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
