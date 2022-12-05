import { css } from 'styled-components'


export const GlobalClass = css`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');  
    
    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--color-white);
    }

    :root {
        --bg-main: #0064D2;
        --color-white: #FFFFFF;
        --color-bg-btn: #FEDE00;
        --color-location: #9BA9B5;
        --color-title-main: #515C68;
        --color-heading-about: #1A1824;
        --color-title-about: #4A515F;

        --font-small: 400;
        --font-medium: 500;
        --font-semibold: 600;
        --font-big: 700;

        --font-size-smaller: 1rem;
        --font-size-small: 1.25rem;
        --font-size-normal: 1.75rem;
        --font-size-medium: 2rem;
        --font-size-big: 2.5rem;
        --font-size-biggest: 3rem;
    }
    
    html {
        scroll-behavior: smooth;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        outline: none;
        border: none
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .container {
        max-width: 960px;
        margin-left: 4rem;
        margin-right: 4rem;

        @media screen and (min-width: 320px) and (max-width: 768px) {
            margin-left: 1rem;
            margin-right: 1rem;
        }

        @media screen and (min-width: 800px) and (max-width: 820px) {
            margin-left: 1.5rem;
            margin-right: 1.5rem;
        }

        @media screen and (min-width: 1024px) {
            margin-left: auto;
            margin-right: auto;
        }

        @media screen and (min-width: 1280px) {
            max-width: 1280px;
            margin-left: 4rem;
            margin-right: 4rem;
        }

        @media screen and (min-width: 1440px) and (max-width: 2048px) {
            margin-left: auto;
            margin-right: auto;
        }

        @media screen and (min-width: 2048px) {
            margin-left: auto;
            margin-right: auto;
        }
    }

    .main {
        overflow: hidden;
    }

    .grid {
        display: grid;
        gap: 1.5rem;
    }
`