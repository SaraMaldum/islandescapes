import styled from 'styled-components';

const Footer = styled.footer`
    color: white;
    font-weight: bold;
    background-color: ${function ( props ) {
        return props.theme.primaryColor;
    }};
    padding: 10px;
    border-radius: 0;
    display: flex;
    margin-top: auto;
    justify-content: center;
    flex-shrink: 0;
`;

export default Footer;