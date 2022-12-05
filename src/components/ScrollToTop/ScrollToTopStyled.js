import styled from "styled-components";

export const ScrollToTopStyle = styled.div`
    position: fixed;
    right: 16px;
    bottom: ${({scrollTop}) => (scrollTop ? '10%' : '-10%')};
    padding: 8px;
    width: 40px;
    height: 40px;
    font-size: 32px;
    z-index: 100;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 100, 210, 0.3);
    border-radius: 4px;
    transition: all .4s ease-out;
    cursor: pointer;

    &:hover {
        opacity: 1;
        background-color: var(--bg-main);

        svg {
            fill: var(--color-white);
        }
    }
`