import styled from "styled-components";

export const CtaStyle = styled.div`
    background-color: var(--bg-main);
    border-radius: 44px;
    padding: 111px 156px 95px;
    margin-bottom: 100px;
    
    .cta {
        &__content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        &__heading {
            font-size: 50px;
            line-height: 60px;
            font-weight: var(--font-semibold);
            color: var(--color-white);
            margin-bottom: 35px;
        }

        &__subheading {
            color: #F4F4F4;
            font-size: 18px;
            line-height: 30px;
            margin-bottom: 40px;
        }

        &__btn {
            padding: 22px 51px;
            border-radius: 37px;
        }
    }

    @media screen and (min-width: 320px) {
        padding: 25px 15px 20px;

        .cta {
            &__heading {
                font-size: 15px;
                text-align: center;
                line-height: 25px;
                margin-bottom: 10px;
            }

            &__subheading {
                font-size: 10px;
                text-align: center;
                margin-bottom: 20px;
            }

            &__btn {
                padding: 15px 25px;
                font-size: 12px;
            }
        }
    }

    @media screen and (min-width: 360px) {
        .cta {
            &__subheading {
                font-size: 12px;
            }
        }
    }

    @media screen and (min-width: 475px) {
        .cta {
            &__heading {
                font-size: 20px;
            }
        }
    }

    @media screen and (min-width: 768px) {
        padding: 50px 25px 35px;
        .cta {
            &__heading {
                font-size: 36px;
                line-height: 45px;
                margin-bottom: 30px;
            }

            &__subheading {
                font-size: 20px;
                margin-bottom: 35px;
            }

            &__btn {
                font-size: 16px;
            }
        }
    }

    @media screen and (min-width: 1024px) {
        .cta {
            &__heading {
                font-size: 46px;
                line-height: 60px;
            }
        }
    }

    @media screen and (min-width: 1280px) {
        padding: 106px 156px 95px;
        margin-bottom: 100px;
        .cta {
            &__heading {
                font-size: 50px;
                line-height: 60px;
                margin-bottom: 40px;
            }

            &__subheading {
                margin-bottom: 40px;
            }

            &__btn {
                padding: 22px 51px;
            }
        }
    }
`