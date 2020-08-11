import styled from 'styled-components';

const Input = styled.input`
    border: 2px solid #b8c1e1 ;
    color: ${function ( props ) {
        return props.theme.colors.primaryColor;
    }};    display: block;
    width: 100%;
    height: 35px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;

    &:focus {
        background-color: #fff;
        border-color: ${function ( props ) {
        return props.theme.colors.terriaryColor;
    }};
        outline: 0;
        box-shadow: 0 0 0 3px rgba(255,144,0,.25);
        transition: .3s;
    }
`;

export default Input;