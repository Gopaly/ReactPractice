import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    const listStyle = {
        display: 'inline',
        width:'200',
        background:'red',
        border: '5px solid pink'
      };
    return (
      <div>
        <div className="body">
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span> 
                    </button>
                    <a class="navbar-brand" ><img src="http://duodesigninc.com/images/logo-innominds.gif" width="120" height="40" alt="Logo" /></a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li className="listStyle active"><Link to ='/'>Home</Link></li>
                        <li className="listStyle"><Link to = 'services'>Services</Link></li>
                        <li className="listStyle"><Link to = '/portfolio'>Portfolio</Link></li>
                        <li className="listStyle"><Link to = '/about'>About</Link></li>
                        <li className="listStyle"><Link to = '/clients'>Clients</Link></li>
                        <li className="listStyle"><Link to = '/price'>Price</Link></li>
                        <li className="listStyle"><Link to = '/contact'>Contact</Link></li>
                    </ul> 
                    </div>
                </div>
            </nav> 
        </div>
      </div>
    )
  }
}
