import React, { useRef } from 'react'
import { ReviewFeaturesStyle, ButtonReview } from './ReviewFeaturesStyled'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import config from '../../Data/data.json';

const ReviewFeatures = () => {
    const  review  = config.reviews;
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <ReviewFeaturesStyle>
            <div className="review container" id='tours'>
                <div className="review__title">
                    <div>
                        <h1 className="review__heading">
                            Recommendation<br/> For Your Trip
                        </h1>   
                    </div>
                    <div>
                        <div className='review__subtext'>
                            Choose the most complete and best<br/> accommodition recomendations that you<br/> want to make your vacation enjoyable
                        </div>
                    </div>
                    <div className='review__slider'>
                        <div className='review__prev' ref={navigationPrevRef}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM16 7L0.999999 7V9L16 9V7Z" fill="#0064D2"/>
                            </svg>
                        </div>
                        <div className='review__next' ref={navigationNextRef}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9L15 9V7L0 7L0 9Z" fill="#0064D2"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            slidesPerGroup: 1
                        },
                        576: {
                            slidesPerView: 2,
                            slidesPerGroup: 2
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        960: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        }
                    }}
                    loop={false}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                        disabledClass: 'disabled_swiper_button'
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    modules={[Navigation]}
                    className="mySwiper"    
                >
                    {review.map((items) => (
                        <SwiperSlide key={items.id}>
                            <div className="review__card" key={items.id}>
                                <div className="review__background">
                                    <img src={items.img} className='review__img' alt="" />
                                    <div className="review__tranform">
                                        <div className="review__rating">
                                            <div>
                                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#FEDE00"/>
                                                </svg>
                                            </div>

                                            <div>
                                                <span className='review__rating-num'>
                                                    {items.rating}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="review__location">
                                            <span className="review__location-text">
                                                {items.countries}
                                            </span>
                                        </div>
                                    </div>

                                    <div className='review__heart' >
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.25 20.9614C15.1877 20.2308 21 11.5387 21 7C21 3.5001 18.875 1 16 1C13.5627 1 11.5623 3.26913 11 5.03856C10.4377 3.26913 8.43733 1 6 1C3.125 1 1 3.5001 1 7C1 11.5387 6.81267 20.2308 10.75 20.9614C10.8324 20.982 10.916 20.9949 11 21C11.0817 20.9743 11.1657 20.9613 11.25 20.9614V20.9614Z" stroke="#0064D2" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>

                                <div className="review__infor">
                                    <div>
                                        <div className="review__double">
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 8.96875H7.09375V15.0625H1V8.96875Z" stroke="#202020" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M2.875 1H15.0625V13.1875H2.875V1Z" stroke="#202020" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M13.1875 2.875L8.5 7.5625M8.5 4.75V7.5625H11.3125" stroke="#202020" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span className='review__double-text'>{items.double}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="review__distance">
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.5 4.75V12.25M11.625 4.75V12.25M5.375 6V12.25M10.375 1L1 10.375M6.3125 1L1 6.3125" stroke="#202020" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M1 1H16V16H1V1Z" stroke="#202020" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" 
                                                strokeLinejoin="round"/>
                                            </svg>
                                            <span className='review__distance-text'>
                                                {items.distance}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="review__subtitle">
                                    {items.title}
                                </div>

                                <div className="review__price">
                                    <span className='review__price-num'>{items.price}</span>
                                    <p className='review__price-text'>{items.text}</p>
                                </div>

                                <div className="review__btn">
                                    <ButtonReview to='/'>Choose</ButtonReview>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </ReviewFeaturesStyle>
    )
}

export default ReviewFeatures