import styled from "styled-components";

export const ReviewFeaturesStyle = styled.div`
    background-color: rgba(254, 246, 190, 0.6);
    padding: 50px 0 0;
    height: 757px;

    .review {
        &__title {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            margin-bottom: 60px;
            column-gap: 147px;
        }

        &__heading {
            font-size: 50px;
            font-weight: var(--font-semibold);
            color: var(--color-heading-about);
            line-height: 60px;
        }

        &__subtext {
            font-size: 18px;
            color: var(--color-title-about);
            font-weight: var(--font-small);
            white-space: nowrap;
            line-height: 30px;
        }

        &__slider {
            display: flex;
            column-gap: 15px;
        }

        &__prev, &__next {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #FEDE00;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }


        &__card {
            padding: 17px;
            position: relative;
        }

        &__background {
            position: relative;

            img {
                object-fit: cover;
            }
        }

        &__tranform {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 10px 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        &__rating {
            background-color: var(--color-white);
            width: 62px;
            height: 32px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 3px;

            &-num {
                font-size: 16px;
                color: #000000;
                font-weight: var(--font-semibold);
            }
        }

        &__location {
            width: 79px;
            height: 32px;
            background-color: var(--color-white);
            display: flex;
            justify-content: center;
            font-size: 16px;
            align-items: center;
            border-radius: 16px;
            font-weight: var(--font-semibold);
        }

        &__heart {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 40px;
            height: 40px;
            background-color: var(--color-white);
            transform: translate(-1rem, 1rem);
            border: 1px solid #C4B9B9;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }


        &__infor {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 18px 0;
            column-gap: 29px;
        }

        &__double, &__distance {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 15px;
        }

        &__double-text, &__distance-text {
            font-size: 14px;
            color: var(--color-title-about);
        }

        &__subtitle {
            font-size: 24px;
            color: var(--color-heading-about);
            font-weight: var(--font-semibold);
            margin-bottom: 30px;
            line-height: 26px;
        }

        &__price {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &-num {
                color: var(--bg-main);
                font-size: 24px;
                font-weight: var(--font-semibold);
            }

            &-text {
                font-size: 14px;
                color: var(--color-title-about);
            }
        }

        &__btn {
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }

    .swiper {
        z-index: 0;
        padding-bottom: 30px !important;
    }

    .swiper-slide {
        width: 370px;
        height: 477px;
        background-color: var(--color-white);
        border: 1px solid #D6CECE;
        border-radius: 29px;

        &:hover {
            -webkit-box-shadow: 
                rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
		    -moz-box-shadow: 
                rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
            box-shadow: 
                rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        }
    }

    .disabled_swiper_button {
        background-color: #FCF4C0;
        cursor: not-allowed;
    }

    @media screen and (min-width: 320px) {
        height: 657px;
        margin-bottom: 50px;
        .review {
            &__title {
                grid-template-columns: none;
            }

            &__heading {
                font-size: 32px;
                line-height: 40px;
                text-align: center;
            }

            &__subtext {
                display: none;
            }

            &__slider {
                display: none;
            }

            &__subtitle {
                font-size: 20px;
            }

            .swiper-slide {
                height: 415px;
            }
        }
    }

    @media screen and (min-width: 360px) {
        .review {
            .swiper-slide {
                height: 445px;
            }
        }
    }

    @media screen and (min-width: 375px) {
        height: 685px;
        .review {
            .swiper-slide {
                height: 455px;
            }
        }
    }

    @media screen and (min-width: 390px) {
        height: 695px;
        .review {
            .swiper-slide {
                height: 475px;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .review {
            &__title {
                grid-template-columns: repeat(3,1fr);
                column-gap: 70px;
            }

            &__heading {
                text-align: left;
            }

            &__subtext {
                display: block;
                font-size: 12px;
                line-height: 20px;
            }

            &__slider {
                display: flex;
            }

            &__subtitle {
                font-size: 22px;
            }

            .swiper-slide {
                height: 465px;
            }
        }
    }

    @media screen and (min-width: 820px) {
        .review {
            &__title {
                column-gap: 75px;
            }

            &__subtext {
                font-size: 14px;
                line-height: 25px;
            }

            &__subtitle {
                font-size: 24px;
            }

            .swiper-slide {
                height: 480px;
            }
        }
    }

    @media screen and (min-width: 960px) {
        height: 635px;
        .review {
            &__heading {
                font-size: 38px;
                line-height: 48px;
            }

            &__subtitle {
                font-size: 20px;
            }

            .swiper-slide {
                height: 400px;
            }
        }
    }

    @media screen and (min-width: 1024px) {
        height: 665px;
        .review {
            &__title {
                column-gap: 147px;
            }

            .swiper-slide {
                height: 425px;
            }
        }
    }

    @media screen and (min-width: 1280px) {
        margin: 9rem 0;
        height: 757px;
        .review {
            &__heading {
                font-size: 50px;
                line-height: 60px;
            }

            &__subtext {
                font-size: 18px;
                line-height: 30px;
            }

            &__subtitle {
                font-size: 24px;
                line-height: 26px;
            }

            .swiper-slide {
                height: 477px;
            }
        }
    }

    @media screen and (min-width: 1440px) and (max-width: 2048px) {
        height: 800px;
        .review {
            &__title {
                column-gap: 220px;
            }

            &__img {
                width: 100%;
            }

            &__double-text, &__distance-text {
                font-size: 20px;
            }

            &__subtitle {
                font-size: 28px;
            }

            .swiper-slide {
                height: 510px;
            }
        }
    }
`
export const ButtonReview = styled.button`
    display: inline-block;
    border: 1px solid #0062CE;
    border-radius: 21px;
    cursor: pointer;
    color: #0062CE;
    padding: 9px 21px;
    background-color: transparent;
    outline: none;
    font-size: 14px;
    transform: translate(-1rem, 0);
    font-weight: var(--font-semibold);
    transition: all .2s;

    &:hover {
        border: none;
        background-color: #FEDE00;
    }
`