import styled from 'styled-components';

const Heading1 = styled.h1`
@import ('https://fonts.googleapis.com/css2?family=Lato&display=swap');

    color: ${function ( props ) {
        return props.theme.secondaryColor;
    }};
    margin: 40px 0 10px 0;
    font-family: 'Lato', sans-serif;
`

export default Heading1; 