import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    top: 0;
    left: 0;
    z-index: 1;
    position: fixed;
    width: 100%;
    background-color: ${({scrollNav}) => (scrollNav) ? 'rgba(0, 100, 210, 0.9)' : 'transparent'};
    box-shadow: ${({scrollShadow}) => (scrollShadow) ? 'rgba(0, 0, 0, 0.2) 0px 8px 24px' : ''};
    transition: all .3s ease-out;

    .nav {
        &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 6rem;
        }

        &__menu {
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 41px;

            @media screen and (max-width: 768px) {
                display: none;
            }
        }

        &__icons {
            display: none;
            color: var(--color-white);

            @media screen and (max-width: 768px) {
                display: block;
            }
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 768px){
        .nav {
            &__container {
                height: 4rem;
            }
        }
    }

    @media screen and (min-width: 800px) and (max-width: 820px) {
        .nav {
            &__menu {
                column-gap: 15px;
            }
            &__item {
                font-size: 18px;
            }
        }
    }

    @media screen and (min-width: 820px) and (max-width: 960px) {
        .nav {
            &__menu {
                column-gap: 15px;
            }
        }
    }
`;

export const NavLogo = styled(LinkR)`
    font-weight: var(--font-semibold);
    color: var(--color-white);
    font-size: var(--font-size-normal);
    cursor: pointer;
    margin-right: 7rem;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (min-width: 800px) and (max-width: 820px) {
        margin-right: 0;
    }

    @media screen and (min-width: 820px) and (max-width: 960px) {
        margin-right: 0;
    }

    @media screen and (min-width: 1024px) {
        margin-right: 0;
    }
`;

export const NavLink = styled(LinkS)`
    position: relative;
    color: var(--color-white);
    font-style: normal;
    font-weight: var(--font-small);
    font-size: var(--font-size-small);
    cursor: pointer;

    &.active {
        border-bottom: 2px solid var(--color-white);
    }

    /* &::after {
        content: "";
        position: absolute;
        margin-bottom: -3px;
        left: 0;
        right: 0;
        bottom: 0;
        height: 3px;
        width: 0;
        background-color: var(--color-white);
        transition: all .3s ease-out;
    }

    &:hover::after {
        transition: all .3s ease-out;
        left: 0;
        width: 100%;
        background-color: var(--color-white);
    } */
`;

export const NavBtn = styled.div`
    display: flex;
    column-gap: 25px;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (min-width: 820px) {
        column-gap: 16px;
    }

    @media screen and (min-width: 1024px) {
        column-gap: 25px;
    }
`;

export const NavBtnLink = styled.button`
    white-space: nowrap;
    display: block;
    cursor: pointer;
    width: 5.5rem;
    height: 2.5rem;
    font-weight: var(--font-semibold);
    border-radius: 1.5rem;
    color: ${({white}) => (white) ? 'var(--color-white)' : 'var(--bg-main)'};
    background-color: ${({secondary}) => (secondary) ? 'transparent' : 'var(--color-bg-btn)'};
    border: ${({secondary}) => (secondary) ? '1px solid var(--color-white)' : 'none'};
    transition: .2s ease-out;

    &:hover {
        transform: scale(.98);
    }
`;