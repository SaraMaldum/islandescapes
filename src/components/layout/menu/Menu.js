import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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

const StyledLink = styled( NavLink )`
    color: ${function ( props ) {
        return props.theme.primaryColor;
    }};
    padding: 10px;

    &:hover {
        font-weight: bold;
        color: ${function ( props ) {
        return props.theme.primaryColor;
    }};
        text-decoration: none;
    }
    
`;

const style = {
    fontWeight: 'bold'
}

const StyledBrand = styled( Navbar )`
    color: ${function ( props ) {
        return props.theme.primaryColor;
    }};
    font-weight: bold;
    font-size: 24px;
    padding: 5px;
`;

function Menu() {
    return (
        <Router>
            <Navbar variant="light" expand="lg">
                <NavLink to="/">
                    <StyledBrand>January Island Escapes</StyledBrand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <StyledLink to="/" activeStyle={style} exact>
                            Home
                        </StyledLink>
                        <StyledLink to="/packages/" activeStyle={style} >
                            Packages
                        </StyledLink>
                        <StyledLink to="/contact/" activeStyle={style} >
                            Contact us
                        </StyledLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/packages" exact component={Packages} />
            </Switch>
        </Router>
    )
}

export default Menu;
