import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { COLORS } from "./constant";

const GlobalStyles = createGlobalStyle`
    ${reset};

    * {
        box-sizing:border-box;
    }

    body { 
        width:100vw;
        height:100vh;
        font-family: 'Poppins', sans-serif;
        color:${COLORS.darkGray};
    }

    a{
        color:inherit;
        text-decoration:none;
        cursor: pointer;
    }
`;

export default GlobalStyles;
