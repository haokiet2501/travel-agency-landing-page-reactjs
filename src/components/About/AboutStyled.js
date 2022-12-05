import styled from "styled-components";

export const AboutStyle = styled.div`   
    .about {
        &__layouts {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 4rem;
            align-items: center;
        }

        &__pictures {
            width: 588px;
            height: 644px;
            display: flex;
            flex-wrap: wrap;  
            align-items: center;
            justify-content: center;
            column-gap: 1.25rem;
            object-fit: cover;
        }

        &__heading {
            font-size: var(--font-size-biggest);
            font-weight: var(--font-semibold);
            color: var(--color-heading-about);
        }

        &__title {
            font-size: var(--font-size-smaller);
            color: var(--color-title-about);
            margin: 1rem 0 3rem;
        }

        &__data {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 3.75rem;

            &-statistical {
                font-size: var(--font-size-big);
                color: var(--bg-main);
                font-weight: var(--font-semibold);
                font-style: normal;
                margin-bottom: 0.9rem;
            }

            &-subtitle {
                color: var(--color-title-about);
                font-size: var(--font-size-smaller);
                white-space: nowrap;
                font-weight: var(--font-small);
            }
        }
    }

    @media screen and (min-width: 320px) {
        padding: 5rem 0;
        .about {
            &__pictures {
                width: 270px;
                height: 350px;
                margin-left: auto;
                margin-right: auto;

                &-1 {
                    width: 150px;
                }

                &-2 {
                    width: 100px;
                }

                &-3 {
                    width: 140px;
                }
            }

            &__layouts {
                grid-template-columns: none;
                gap: 3rem 0;
            }

            &__heading {
                font-size: 25px;
                line-height: 30px;
            }

            &__title {
                font-size: 10px;
                line-height: 15px;
            }

            &__data {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                text-align: center;
                gap: 30px;
            }
        }
    }

    @media screen and (min-width: 360px) {
        .about {
            &__heading {
                font-size: 28px;
            }
        }
    }

    @media screen and (min-width: 390px) {
        .about {
            &__heading {
                font-size: 32px;
                line-height: 40px;
            }

            &__title {
                font-size: 12px;
                line-height: 20px;
            }
        }
    }

    @media screen and (min-width: 768px) {
        padding: 9rem 0;
        .about {
            &__layouts {
                grid-template-columns: repeat(2,1fr);
                -webkit-column-gap: 4rem;
                column-gap: 4rem;
            }
        }
    }

    @media screen and (min-width: 960px) {
        padding: 9rem 0;
        .about {
            &__heading {
                font-size: 38px;
                line-height: 45px;
            }

            &__title {
                font-size: 14px;
            }

            &__data {
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
            }

            &__pictures {
                width: 370px;

                &-1 {
                    width: 200px;
                }

                &-2 {
                    width: 140px;
                }

                &-3 {
                    width: 170px;
                }
            }

            &__title {
                font-size: 12px;
            }
        }
    }

    @media screen and (min-width: 1280px) {
        padding: 57px 0;
        .about {
            &__layouts {
                column-gap: 3rem;
            }
            &__pictures {
                width: 588px;
                height: 644px;

                &-1 {
                    width: 349px;
                }

                &-2 {
                    width: 216px;
                }

                &-3 {
                    width: 300px;
                }
            }

            &__content {
                width: 518px;
            }

            &__heading {
                font-size: 50px;
                line-height: 60px;
            }

            &__title {
                font-size: 18px;
                line-height: 30px;
            }

            &__data {
                gap: 59px;
                text-align: left;

                &-subtitle {
                    font-size: 20px;
                }
            }
        }
    }

    @media screen and (min-width: 1440px) and (max-width: 2048px) {
        .about {
            &__layouts {
                column-gap: 11rem;
            }
        }
    }

    @media screen and (min-width: 2048px) and (max-width: 3840px) {
        .about {
            &__layouts {
                column-gap: 11.5rem;
            }
        }
    }
`