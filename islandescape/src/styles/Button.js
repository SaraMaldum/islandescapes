import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const StyledButton = styled( Button )`
    color: white;
    background-color: #ff9000;
    border: 1px solid #ff9000;
    font-weight: bold;
    margin-bottom: 10px;

    &:hover {
        background-color: #fdf6ec;
        border: 1px solid #ff9000;
        color: #ff9000;
        transition: 0.4s;
    }
`

export default StyledButton;