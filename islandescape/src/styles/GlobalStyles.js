import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

    body {
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
        background-color: ${function ( props ) {
        return props.theme.tertiaryColor;
    }};

    }
`;

export default GlobalStyle;