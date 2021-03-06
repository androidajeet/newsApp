import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import '../Toolbar/Toolbar';
//import Toolbar from '../Toolbar/Toolbar';
//import Footer from '../Footer/Footer';
//import Jumbotron from '../Jumbotron/Jumbotron';
import Header from '../Header/Header';
//import Carousel from '../Carousel/Carousel';

class Layout extends Component {
    render() {
        console.log("inside layout", this.props)
        return (
            <Aux>
                <Header />

                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}



export default Layout;

//<Toolbar {...this.props} />
// <Jumbotron />