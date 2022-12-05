import styled from "styled-components";

export const DatePickerStyle = styled.div`
    .date {
        &__heading {
            display: flex;
            align-items: center;
            column-gap: 10px;
            margin-bottom: 0.5rem;
        }

        &__title {
            color: var(--color-location);
            font-size: 1rem;
        }
    }

    input.date {
        outline: none;
        border: none;
        color: var(--color-title-main);
        font-size: 1rem;
        cursor: pointer;
        font-weight: var(--font-semibold);
    }

    @media screen and (min-width: 320px) {
        .date {
            &__heading {
                justify-content: center;
            }
        }

        input.date {
            width: 140px;
            text-align: center;
        }
    }

    @media screen and (min-width: 576px) and (max-width: 676px) {
        .date {
            &__heading {
                justify-content: flex-start;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .date {
            &__heading {
                justify-content: flex-start;
            }
        }
    }
`