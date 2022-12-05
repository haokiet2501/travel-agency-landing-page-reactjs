import styled from "styled-components";

export const DropDownStyle = styled.div`
    .dropdown {
        width: 127px;

        &__btn {
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 10px;
            margin-bottom: 0.5rem;
            position: relative;
            cursor: pointer;
        }

        &__selected {
            color: var(--color-location);
            font-size: 1rem;
            text-transform: uppercase;
        }

        &__content {
            position: absolute;
            background-color: var(--color-white);
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            padding: 0.5rem 0.75rem 0;
            border-radius: 8px;
            cursor: pointer;

            &::before {
                bottom: 0;
                background-color: #fff;
            }

            &::after {
                box-sizing: content-box;
                position: absolute;
                border: 8px solid transparent;
                height: 0;
                width: 1px;
                content: "";
                z-index: -1;
                border-width: 8px;
                left: -8px;
            }
        }

        &__item {
            padding: 0.5rem;
        }

        &__item:not(:last-child) {
            border-bottom: 1px solid #eee;
        }

        &__item, &__result {
            color: var(--color-title-main);
            font-weight: var(--font-semibold);
        }
    }
`