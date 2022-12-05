import React, { useRef } from 'react'
import { TestimonialsStyle } from './TestimonialsStyled'
import { Swiper ,SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import config from '../../Data/data.json';

const Testimonials = () => {
    const testimonial = config.testimonials;
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <TestimonialsStyle className='container' id='blog'>
            <div className='testimonials'>
                <div className="testimonials__title">
                    <div>
                        <h1 className="testimonials__heading">
                            What Our Customers<br/> Are Saying
                        </h1>   
                    </div>

                    <div className='testimonials__slider'>
                        <div className='testimonials__prev' ref={navigationPrevRef}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM16 7L0.999999 7V9L16 9V7Z" fill="#0064D2"/>
                            </svg>
                        </div>
                        <div className='testimonials__next' ref={navigationNextRef}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9L15 9V7L0 7L0 9Z" fill="#0064D2"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <Swiper
                    slidesPerView={2}
                    slidesPerGroup={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: {
                            slidesPerGroup: 1,
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerGroup: 2,
                            slidesPerView: 2
                        }
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                        disabledClass: 'disabled_swiper_testimonials'
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    modules={[Navigation]}
                    className="mySwiper2"
                >
                    {testimonial.length > 0 && testimonial.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='testimonials__text'>
                                {item.text}
                            </div>

                            <div className="testimonials__gruop-auth">
                                <img src={item.avatar} alt="" />

                                <div className="testimonials__group-text">
                                    <strong 
                                        className='testimonials__author'
                                    >
                                        {item.author}
                                    </strong>

                                    <p className="testimonials__role">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="testimonials__line"></div>
                </Swiper>
            </div>
        </TestimonialsStyle>
    )
}

export default Testimonials