import styled from 'styled-components'

export const FeaturesStyle = styled.div`
    padding: 9rem 0;
    .features {
        &__title {
            text-align: center;
            margin-bottom: 5rem;
        }

        &__heading {
            color: var(--color-heading-about);
            font-size: var(--font-size-biggest);
            font-weight: var(--font-semibold);
            margin-bottom: 1.3rem;
        }

        &__subheading {
            color: var(--color-title-about);
            font-size: 18px;
            font-weight: var(--font-medium);
            line-height: 30px;
        }

        &__content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 9rem;
            align-items: flex-end;
            justify-content: space-between;
        }

        &__choose {
            display: grid;
            flex-direction: column;
            grid-template-rows: repeat(3, 1fr);
            width: 431px;
            row-gap: 2rem;
        }

        &__number {
            position: relative;

            &::after {
                content: attr(data-title);
                width: 55px;
                height: 55px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--bg-main);
                border-radius: 100rem;
                color: var(--color-white);
                font-weight: var(--font-semibold);
            }
        }

        &__text {
            margin: 1.15rem 0 1.5rem;
            font-size: var(--font-size-small);
            font-weight: var(--font-semibold);
            color: var(--color-heading-about);
            line-height: 32px;
        }

        &__subtext {
            color: var(--color-title-about);
            font-weight: var(--font-small);
            line-height: 28px;
            font-size: var(--font-size-smaller);
        }

        &__cover {
            position: relative;
            &-img1 {
                object-fit: cover; 
                width: 455px;
                height: 643px;
            }
        }

        &__avatar {
            position: absolute;
            width: 246px;
            height: 84px;
            top: 0;
            left: 0;
            border-radius: 2.25rem;
            transform: translate(-8.5rem, 7.5rem);
            background-color: var(--color-white);
            box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.08);
            /* z-index: 1; */
            display: flex;
            align-items: center;
            justify-items: center;
            column-gap: 0.9rem;
            padding: 1.3rem 0 1rem 1.2rem;
        }

        &__pictureAuth {
            width: 51px;
            height: 51px;
            object-fit: cover;
        }

        &__Auth {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__author {
            color: var(--color-heading-about);
            margin-bottom: 0.25rem;
        }

        &__rating {
            display: inline-block;
            font-size: 14px;
            color: var(--color-title-about);
            padding-right: 0.5rem;

            &-num {
                color: var(--color-bg-btn);
            }
        }

        &__pictures {
            position: absolute;
            bottom: 0;
            transform: translate(-8.5rem, -5rem);
            box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.1);
            border-radius: 38px;
        }

        &__img2 {
            object-fit: cover;
            border: 10px solid #fff;
            border-radius: 38px;
        }
    }

    @media screen and (min-width: 320px) {
        padding: 5rem 0;
        .features {
            &__title {
                margin-bottom: 3rem;
            }

            &__heading {
                font-size: 25px;
            }

            &__subheading {
                font-size: 12px;
                line-height: 15px;
            }

            &__content {
                grid-template-columns: none;
            }

            &__choose {
                width: 280px;
            }

            &__text{
                font-size: 16px;
                line-height: 25px;
            }

            &__subtext {
                font-size: 14px;
                line-height: 20px;
            }

            &__cover {
                display: none;
            }
        }
    }

    @media screen and (min-width: 360px) {
        .features {
            &__heading {
                font-size: 28px;
            }
        }
    }

    @media screen and (min-width: 360px) {
        .features {
            &__heading {
                font-size: 32px;
                line-height: 40px;
            }

            &__subheading {
                font-size: 14px;
                line-height: 20px;
            }

            &__text {
                font-size: 18px;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .features {
            &__content {
                grid-template-columns: repeat(2,1fr);
                column-gap: 3rem;
            }

            &__cover {
                display: block;

                &-img1 {
                    border-radius: 22px;
                }
            }

            &__avatar {
                width: 206px;
                transform: translate(-6.5rem, 7.5rem);
            }

            &__pictures {
                width: 280px;
                transform: translate(-6.5rem, -8rem);
            }
        }
    }

    @media screen and (min-width: 960px) {
        .features {
            &__heading {
                font-size: 38px;
                line-height: 45px;
            }

            &__subheading {
                font-size: 16px;
            }

            &__avatar {
                transform: translate(-8.5rem,7.5rem);
            }

            &__pictures {
                transform: translate(-8.5rem,-5rem);
            }
        }
    }

    @media screen and (min-width: 1280px) {     
        padding: 157px 0;
        margin-bottom: 75px;
        .features {
            &__title {
                margin-bottom: 60px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }
            &__heading {
                font-size: 50px;
                line-height: 60px;
            }

            &__subheading {
                font-size: 18px;
                line-height: 30px;
            }

            &__content {
                column-gap: 248px;
            }

            &__choose {
                width: 431px;
            }

            &__text {
                font-size: 20px;
            }

            &__subtext {
                font-size: 16px;
                line-height: 28px;
            }

            &__cover {
                width: 595px;
            }

            &__pictures {
                width: 363px;
            }
        }
    }

    @media screen and (min-width: 1440px) and (max-width: 2048px) {
        .features {
            &__content {
                column-gap: 389px;
            }
        }
    }

    @media screen and (min-width: 2048px) and (max-width: 3840px) {
        .features {
            &__content {
                column-gap: 390px;
            }
        }
    }
`