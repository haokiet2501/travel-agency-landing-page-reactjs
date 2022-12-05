import styled from "styled-components";
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const SideBarStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 999;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    background-color: var(--color-white);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 0 0 22px 22px;
    transition: all .3s ease-in-out;

    .sidebar {
        &__icons {
            position: absolute;
            right: 0;
            transform: translate(-16px, 22px);

            svg {
                fill: var(--color-heading-about);

                &:hover {
                    fill: var(--bg-main);
                }
            }
        }

        &__wrapper {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            left: 50%;
            transform: translate(-50%, 50%);
            flex-direction: column;
            gap: 60px;
        }

        &__menu {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
        }

        &__btn {
            display: flex;
            gap: 16px;
        }
    }
`

export const SideBarLink = styled(LinkS)`
    font-size: 20px;
    font-weight: var(--font-semibold);
    letter-spacing: 1px;
    cursor: pointer;

    &.active::after {
        position: absolute;
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 100rem;
        margin-bottom: -10px;
        background-color: var(--bg-main);
    }

    &:hover {
        color: var(--bg-main);
    }
`

export const SideBarBtn = styled(LinkR)`
    padding: 15px 25px;
    font-size: 16px;
    font-weight: var(--font-semibold);
    background-color: ${({yellow}) => (yellow ? '#FEDE00' : 'transparent')};
    border: ${({yellow}) => (yellow ? 'none' : '1px solid var(--bg-main)')};
    border-radius: 25px;    
    color: ${({blue}) => (blue ? 'var(--bg-main)' : 'var(--bg-main)')};

    &:hover { 
        transform: scale(.98);
    }
`