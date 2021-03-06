import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --maxWidth: 1440px;
    --pokedexRed: rgb(216,70,61);
    --pokedexGreen: #B6E3B2;
    --pokedexBlue: #69B6FE;
    --pokedexOrange: #FC993C;
    --fontSmall: 1rem;
    --fontMed: 1.2rem;
    --fontLarge: 1.5rem;

}

*{
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
}

body {
    padding: 0; 
    margin: 0;
}
`;
