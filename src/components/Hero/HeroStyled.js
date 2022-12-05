import styled from "styled-components";

export const Hero = styled.div`
    position: relative;
    .hero {
        &__container {
            position: relative;
            background-color: var(--bg-main);
            height: calc(1100px - 8rem);
            align-content: center;
        }

        &__main {
            display: grid;
            align-items: center;
        }

        &__layouts {
            margin-top: 6rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 6.75rem;
        }


        &__heading, &__title {
            color: var(--color-white);
        }

        &__heading {
            font-size: 3.75rem;
            margin-bottom: 1.8rem;
            font-weight: var(--font-semibold);
        }

        &__title {
            font-size: 1.25rem;
            font-weight: var(--font-small);
        }

        &__btn {
            display: flex;
            align-items: center;
            column-gap: 1.5rem;
            margin-top: 3rem;

            &-secondary {
                display: flex;
                align-items: center;
            }
        }

        &__play {
            display: flex;
            align-items: center;
            column-gap: 0.8rem;
            cursor: pointer;
            color: var(--color-white);
        }

        &__text {
            font-weight: var(--font-medium);
        }

        &__image {
            width: 100%;
            object-fit: cover;
            background-position: center;
        }

        &__address {
            width: 745px;
            height: 166px;
            border-radius: 5rem;
            background-color: var(--color-white);
            box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.09);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2.5rem 2rem;
        }

        &__global {
            display: flex;
            align-items: center;

            &-rounded {
                width: 60px;
                height: 60px;
                background-color: rgba(0, 100, 210, 0.3);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                padding: 0.75rem 1.25rem;
                margin-right: 1.25rem;
            }
        }

        &__location {
            display: flex;
            align-items: center;
        }

        &__dropdown {
            margin-right: 2rem;
            padding-right: 2rem;
            border-right: 1px solid #D0C8C8;
        }
    }

    @media screen and (min-width: 320px) {
        .hero {
            &__container {
                height: 1200px;
                position: relative;
            }
            &__main {
                gap: 3rem 0;
            }
            &__layouts {
                grid-template-columns: none;
                gap: 3rem 0;
            }

            &__heading {
                font-size: 2rem;
            }

            &__title {
                font-size: 0.75rem;
            }

            &__image {
                width: 270px;
                height: 270px;
                margin-left: auto;
                margin-right: auto;
            } 

            &__play {
                font-size: 15px;
            }

            &__address {
                width: 270px;
                height: 380px;
                overflow: hidden;
                align-items: center;
                justify-content: center;
                padding: 1.75rem 0.75rem;
                gap: 25px;
                margin-left: auto;
                margin-right: auto;
            }

            &__address, &__global {
                display: flex;
                flex-direction: column;
            }

            &__located {
                margin-bottom: 25px;
            }

            &__located, &__dated {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 1rem;
            }

            &__global-rounded {
                margin-right: 0;
            }

            &__dropdown {
                border: none;
                margin-right: 0;
                padding-right: 0;
            }
        }
    }

    @media screen and (min-width: 360px) {
        margin-bottom: 50px;
        .hero {
            &__image {
                width: 320px;
                height: 320px;
            }

            &__address {
                width: 320px;
            }
        }
    }

    @media screen and (min-width: 390px) {
        .hero {
            &__container {
                height: 1300px;
            }

            &__heading {
                font-size: 2.25rem;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .hero { 
            &__container {
                height: 786px;
            }

            &__layouts {
                margin-top: 6rem;
                grid-template-columns: repeat(2,1fr);
                -webkit-column-gap: 3.75rem;
                column-gap: 3.75rem;
            }

            &__image {
                width: 340px;
            }

            &__address {
                width: 545px;
                height: 200px;
                margin-left: 0;
                margin-right: 0;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;
            }

            &__global {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }

            &__located, &__dated {
                flex-direction: row;
            }
        }
    }

    @media screen and (min-width: 960px) {
        .hero {
            &__heading {
                font-size: 3rem;
            }

            &__title {
                font-size: 1rem;
            }
        }
    }

    @media screen and (min-width: 1024px) {
        .hero {
            &__layouts {
                column-gap: 6.75rem;
            }
        }
    }

    @media screen and (min-width: 1280px) {
        margin-bottom: 100px;
        .hero {
            &__container {
                height: 1043px;
            }

            &__layouts {
                column-gap: 3.5rem;
            }

            &__content {
                width: 492px;
            }

            &__heading {
                font-size: 64px;
                line-height: 74px;
                margin-bottom: 30px;
            }

            &__title {
                font-size: 20px;
                line-height: 32px;
            }

            &__btn {
                margin: 50px 0 121px;
            }

            &__image {
                width: 570px;
            }

            &__address {
                width: 745px;
                height: 166px;
            }

            &__global {
                flex-direction: row;
                align-items: center;
            }

            &__located {
                margin-bottom: 0;

                &::after {
                    content: "";
                    border: 1px solid #D0C8C8;
                    width: 60px;
                    transform: rotate(90deg);
                }
            }
        }
    }

    @media screen and (min-width: 1440px) and (max-width: 2048px) {
        .hero {
            &__layouts {
                column-gap: 8.5rem;
            }
        }
    }

    @media screen and (min-width: 2048px) and (max-width: 3048px) {
        .hero {
            &__layouts {
                column-gap: 7.5rem;
            }
        }
    }
`;  