import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

    body {
        height: 100vh;
        display: flex;
        flex-direction: column;
        font-family: 'Source Sans Pro', sans-serif;
        background-color: ${({ theme }) => theme.colors.tertiaryColor};
    }
    h1 {
        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }
    h2 {
        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
`;

export default GlobalStyle;