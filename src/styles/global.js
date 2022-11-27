import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    }

    button{
        border: none;
        cursor: pointer;
    }

    img {
    max-width: 100%;
    }

    ul {
    list-style: none;
    }

    :root {
    --color-primary100: #27AE60;
    --color-primary500: #93D7AF;
    --color-secondary:  #EB5757;

    --color-grey100: #333333;
    --color-grey50:  #828282;
    --color-grey20:  #E0E0E0;
    --color-grey0:   #F5F5F5;

    --color-negative:    #E60000;
    --color-warning:     #FFCD07;
    --color-sucess:      #168821;
    --color-information: #155BCB;

    --radius1: 8px;
    --radius2: 5px;
    }    
`;
