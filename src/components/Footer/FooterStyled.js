import styled from "styled-components";

export const FooterStyle = styled.div`
    .footer {
        &__nav {
            display: flex;
            justify-content: space-between;
            margin-bottom: 77px;
        }

        &__logo {
            font-size: 28px;
            line-height: 38px;
            text-transform: uppercase;
            color: #000000;
            font-weight: var(--font-semibold);
        }

        &__items {
            display: flex;
            column-gap: 21px;
        }

        &__link, &__number {
            font-size: 20px;
            color: #695656;
            font-weight: var(--font-small);
        }

        &__line {
            border: 1px solid #B4A9A9;
            margin-bottom: 63px;
        }

        &__company {
            margin-bottom: 110px;
            display: flex;
            justify-content: space-between;
        }

        &__brand {
            font-size: 14px;
            color: #817E7E;
        }

        &__layouts {
            display: flex;
            column-gap: 30px;
        }

        &__privacy, &__term {
            font-size: 14px;
            color: #000000;
        }
    }

    @media screen and (min-width: 320px) {
        .footer {
            &__nav {
                flex-direction: column;
                gap: 20px;
            }

            &__nav, &__line, &__company {
                margin-bottom: 37px;
            }

            &__logo {
                font-size: 20px;
            }

            &__items {
                flex-direction: column;
                gap: 15px;
            }

            &__link, &__number {
                font-size: 16px;
            }

            &__layouts {
                gap: 10px;
            }

            &__brand, &__privacy, &__term {
                font-size: 10px;
            }

            &__privacy, &__term {
                white-space: nowrap;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .footer {
            &__logo {
                font-size: 24px;
            }
            &__nav, &__items {
                flex-direction: row;
            }

            &__items {
                column-gap: 30px;
            }

            &__brand, &__privacy, &__term {
                font-size: 16px;
            }
        }
    }

    @media screen and (min-width: 960px) {
        .footer {
            &__layouts {
                gap: 30px;
            }
        }
    }

    @media screen and (min-width: 1280px) {
        .footer {
            &__nav {
                margin-bottom: 77px;
            }

            &__line {
                margin-bottom: 63px;
            }

            &__logo {
                font-size: 28px;
            }

            &__link, &__number {
                font-size: 20px;
            }

            &__brand, &__privacy, &__term {
                font-size: 14px;
            }
        }
    }
`