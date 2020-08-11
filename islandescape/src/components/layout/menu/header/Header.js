import styled from 'styled-components';

const Header = styled.h1`
@import ('https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet');

    color: ${function ( props ) {
        return props.theme.secondaryColor;
    }};
    margin: 40px 0 10px 0;
    font-family: 'Lato', sans-serif;
`

export default Header; 