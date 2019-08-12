import React from 'react'
import '../css/header.css'
import logo from '../img/logo-ALTA.png'
import '../css/bootstrap.min.css'

export class Header extends React.Component{
    render(){
        return (
            <header>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <div class="header-logo">
                           <a href="home.html"><img src={logo} alt="" /></a>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="header-nav text-right">
                            <a class="page-now" href="home.html">HOME</a>
                            <a href="about.html">ABOUT</a>
                            <a href="page-experience.html">EXPERIENCE</a>
                            <a href="contact.html">CONTACT</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}