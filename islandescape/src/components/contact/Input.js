import styled from 'styled-components';

const Input = styled.input`
    border: 2px solid #b8c1e1 ;
    color: #3c54a0;
    display: block;
    width: 100%;
    height: 35px;
    padding: 10px;
    border-radius: 10px;

    &:focus {
        color: black;
        background-color: #fff;
        border-color: #ff9000;
        outline: 0;
        box-shadow: 0 0 0 3px rgba(255,144,0,.25);
        transition: .3s;
    }
`;

export default Input;