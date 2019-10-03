import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown,} from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Manage Projects App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    {localStorage.getItem('token') === "" ? (
                        <Nav>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                        ) : (
                            <Nav>
                                <Navbar.Text style={{color: "white"}}>
                                    Welcome {localStorage.getItem("user")}
                                    </Navbar.Text>
                                <Nav.Link href="/projects">Projects</Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;
