import styled from "styled-components";

export const TestimonialsStyle = styled.div`
    padding: 150px 0;

    .testimonials {
        &__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 44px;
            column-gap: 539px;
        }

        &__heading {
            font-size: 50px;
            font-weight: var(--font-semibold);
            line-height: 60px;
        }

        &__slider {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 16px;
        }

        &__prev, &__next {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background-color: #FEDE00;
            border-radius: 100rem;
        }

        .disabled_swiper_testimonials {
        background-color:  rgba(217, 217, 217, 0.5);
        cursor: not-allowed;
        }

        &__text {
            font-size: 18px;
            font-weight: var(--font-small);
            line-height: 30px;
            color: var(--color-title-about);
            word-break: break-all;
            margin-bottom: 34px;
        }

        &__gruop-auth {
            display: flex;
            align-items: center;
            column-gap: 7px;
        }

        &__author {
            color: var(--color-title-heading);
            font-weight: var(--font-semibold);
            font-size: 20px;
            line-height: 30px;
        }

        &__role {
            color: #69657C;
            font-size: 18px;
        }
        
        .swiper {
            z-index: 0;
        }

        .swiper-slide {
            position: relative;
        }

        &__line {
            position: absolute;
            width: 273px;
            border: 1px solid #D0B0B0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(90deg);
        }
    }

    @media screen and (min-width: 320px) {
        padding: 100px 0;
        .testimonials {
            &__heading {
                font-size: 25px;
                line-height: 35px;
            }

            &__slider {
                display: none;
            }

            &__text {
                font-size: 16px;
            }

            &__author {
                font-size: 18px;
            }

            &__role {
                font-size: 16px;
            }

            &__line {
                display: none;
            }
        }
    }

    @media screen and (min-width: 360px) {
        .testimonials {
            &__heading {
                font-size: 28px;
            }
        }
    }

    @media screen and (min-width: 390px) {
        .testimonials {
            &__heading {
                font-size: 32px;
                line-height: 40px;
            }

            &__author {
                font-size: 20px;
            }
        }
    }

    @media screen and (min-width: 768px) {
        padding: 100px 0;
        .testimonials {
            &__title {
                column-gap: 0;
            }

            &__line {
                display: block;
            }

            &__slider {
                display: flex;
            }
        }
    }

    @media screen and (min-width: 960px) {
        .testimonials {
            &__heading {
                font-size: 38px;
                line-height: 45px;
            }

            &__text {
                font-size: 18px;
                word-break: normal;
            }

            &__role {
                font-size: 18px;
            }
        }
    }

    @media screen and (min-width: 1280px) {
        padding: 150px 0;
        .testimonials {
            &__heading {
                font-size: 50px;
                line-height: 60px;
            }
        }
    }
`