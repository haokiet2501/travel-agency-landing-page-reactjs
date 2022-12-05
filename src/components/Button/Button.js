import styled from "styled-components";
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    background-color: ${({primary}) => (primary) ? 'var(--color-white)' : 'var(--color-bg-btn)'};
    padding: 1rem 1.1rem;
    font-weight: var(--font-semibold);
    border-radius: 1.5rem;
    color: var(--bg-main);
    cursor: pointer;
    transition: .2s ease-out;

    &:hover {
        transform: scale(.98);
    }

    @media only screen and (min-width: 320px) and (max-width: 475px) {
        font-size: 15px;
    }
`