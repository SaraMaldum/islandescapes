import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import Home from '../../home/Home';
import Contact from '../../contact/Contact';
import Packages from '../../packages/Packages';

function Menu() {
    return (
        <Router>
            <Navbar variant="light" expand="lg">
                <NavLink to="/">
                    <Navbar.Brand>January Island Escapes</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact >
                            Home
                        </NavLink>
                        <NavLink to="/packages/" exact >
                            Packages
                        </NavLink>
                        <NavLink to="/contact/" exact >
                            Contact us
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/packages" exact component={Packages} />
                </Switch>
            </Container>
        </Router>
    )
}

export default Menu;