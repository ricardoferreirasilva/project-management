import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

class NavigationBar extends Component {
    componentDidMount(){
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default NavigationBar;
