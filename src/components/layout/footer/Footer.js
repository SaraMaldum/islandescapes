import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const StyledFooter = styled( Card )`
    text-align: center;
    margin-top: auto;
    color: white;
    font-weight: bold;
    background-color: ${function ( props ) {
        return props.theme.primaryColor;
    }};
    padding: 10px;
    border-radius: 0;
`;

function Footer() {
    return (
        <StyledFooter>&copy; Sara Maldum</StyledFooter>
    )
}

export default Footer;