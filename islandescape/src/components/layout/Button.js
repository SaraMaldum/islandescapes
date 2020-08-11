import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const StyledButton = styled( Button )`
    color: white;
    background-color: ${function ( props ) {
        return props.theme.secondaryColor;
    }};
    border: 1px solid #ff9000;
    font-weight: bold;
    margin-bottom: 10px;

    &:hover {
        background-color: ${function ( props ) {
        return props.theme.tertiaryColor;
    }};
        border: 1px solid #ff9000;
        color: #ff9000;
        transition: 0.4s;
    }
`

export default StyledButton;