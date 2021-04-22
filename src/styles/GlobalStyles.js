import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    body { 
        width:100vw;
        height:100vh;
        font-family: 'Poppins', sans-serif;
    }

    a{
        color:black;
        text-decoration:none;
        cursor: pointer;
    }

`;

export default GlobalStyles;
