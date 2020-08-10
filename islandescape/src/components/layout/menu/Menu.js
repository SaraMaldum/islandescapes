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
import styled from 'styled-components';
import Home from '../../home/Home';
import Contact from '../../contact/Contact';
import Packages from '../../packages/Packages';

const NavBar = styled( Navbar )`      
    background-color: #3c54a0;
`;

const StyledLink = styled( NavLink )`
    color: white;
    padding: 5px;

    &:hover {
        font-weight: bold;
        color: white;
        text-decoration: none;
    }
`;

const StyledBrand = styled( Navbar )`
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding: 5px;
`

function Menu() {
    return (
        <Router>
            <NavBar variant="light" expand="lg">
                <NavLink to="/">
                    <StyledBrand>January Island Escapes</StyledBrand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <StyledLink to="/" exact>
                            Home
                        </StyledLink>
                        <StyledLink to="/packages/" >
                            Packages
                        </StyledLink>
                        <StyledLink to="/contact/" >
                            Contact us
                        </StyledLink>
                    </Nav>
                </Navbar.Collapse>
            </NavBar>
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
