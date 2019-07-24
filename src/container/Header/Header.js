import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div>
                <header id="header">
                    <div id="top-header">
                        <div className="container">
                            <div className="header-links">
                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Advertisement</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#"><i className="fa fa-sign-in"></i> Login</a></li>
                                </ul>
                            </div>
                            <div className="header-social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </header>
            </div>




        );
    }
}

export default Header;