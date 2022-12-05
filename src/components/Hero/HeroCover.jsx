import React, { useState } from 'react'
import { Hero } from './HeroStyled';
import { Button } from '../Button/Button';
import bgtrip  from '../images/ttrip-cover.png'
// import useClickOutSide from '../../hooks/useClickOutSide';
import DropDown from '../DropDown/DropDown';
import DatePickerElement from '../DatePicker/DatePicker';

const HeroCover = () => {
    const [selected, setSelected] = useState("New Zelenda");

    return (
        <Hero className='hero' id='home'>
            <div className='hero__container grid'>
                <div className="hero__main container">
                    <div className="hero__layouts">
                        <div className="hero__content">
                            <h1 className="hero__heading">
                                Find The Best <br/>Place To Stress <br/>Release
                            </h1>

                            <span className="hero__title">
                                We believe in a travelling experience by providing
                                <br/>our tour plan that suits your the best!
                            </span>

                            <div className="hero__btn">
                                <Button 
                                    to='/' primary={true.toString()}
                                >
                                    Explore More
                                </Button>

                                <div className="hero__btn-secondary">
                                    <div className="hero__play">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#FEDE00"/>
                                        <path d="M19.4605 14.1611C20.1242 14.5511 20.1169 15.5133 19.4473 15.8931L13.3626 19.3443C12.693 19.7241 11.8634 19.2367 11.8693 18.4669L11.9227 11.4718C11.9286 10.702 12.7656 10.2273 13.4293 10.6172L19.4605 14.1611Z" fill="#0064D1"/>
                                        </svg>

                                        <div className='hero__text'>Play Demo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__image">
                            <img src={bgtrip} alt="" />
                        </div>
                    </div>

                    <div className="hero__address">
                        <div className="hero__global">
                            <div className='hero__located'>
                                <div className="hero__global-rounded">
                                    <div className="hero__location">
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.4999 33.9058C17.4999 24.5542 26.414 20.1245 27.2343 12.1948C27.4351 10.8476 27.354 9.47338 26.9963 8.15908C26.6386 6.84478 26.012 5.61902 25.1562 4.55934C24.3004 3.49965 23.234 2.62911 22.0244 2.00279C20.8149 1.37646 19.4885 1.00797 18.1292 0.920644C16.7699 0.833314 15.4072 1.02904 14.1275 1.49544C12.8477 1.96184 11.6786 2.68876 10.6943 3.63022C9.70989 4.57167 8.93161 5.70718 8.40867 6.9649C7.88573 8.22263 7.6295 9.57519 7.65619 10.937C7.66756 11.34 7.70409 11.7418 7.76556 12.1402C8.58587 20.1245 17.4999 24.5542 17.4999 33.9058Z" fill="#0062CE"/>
                                        </svg>
                                    </div>
                                </div>

                                <div className="hero__dropdown">
                                    <DropDown 
                                        selected={selected} setSelected={setSelected} 
                                    />
                                </div>
                            </div>

                            <div className='hero__dated'>
                                <div className="hero__global-rounded">
                                    <div className="hero__date">
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.25 32.8125V30.0781C24.0625 30.0781 20.8124 26.9905 19.145 25.6944C18.6656 25.347 18.0884 25.1607 17.4964 25.1622C16.9044 25.1638 16.3281 25.3532 15.8506 25.7031C14.1963 27.0113 10.9375 30.0781 8.75 30.0781V32.8125H26.25ZM17.5 20.2344C17.7308 20.2344 18.6391 18.1267 19.9719 17.2474L22.9939 15.1249C23.4133 14.8264 23.8013 14.4861 24.1522 14.1094C18.9569 16.2039 15.3524 12.4688 10.9829 14.2188L10.9605 14.2237C11.2808 14.5556 11.6306 14.8578 12.0055 15.1266C12.0055 15.1266 14.2707 16.7207 15.0276 17.249C16.4177 18.2181 17.0811 20.2344 17.5 20.2344Z" fill="#0062CE"/>
                                        <path d="M13.5494 12.6405C14.7859 12.6819 16.0144 12.8567 17.2134 13.1616C18.3767 13.4579 19.5684 13.6286 20.7681 13.6708C21.7882 13.6742 22.7991 13.4779 23.7437 13.0927L25.357 12.442C25.9427 11.3386 26.2493 10.1086 26.25 8.85938V2.1875H8.75V8.85938C8.75203 10.4446 9.2466 11.9901 10.1653 13.282L10.6575 13.1687C11.5796 12.8122 12.5608 12.633 13.5494 12.6405V12.6405ZM22.9945 20.265L20.096 18.2602C20.096 18.2602 19.752 18.5544 19.6859 18.6364C19.2537 19.2059 18.8868 19.822 18.5921 20.4734C18.5274 20.715 18.3859 20.929 18.1889 21.0832C17.9919 21.2374 17.7501 21.3234 17.5 21.3281C17.2572 21.3173 17.0231 21.2348 16.8272 21.0911C16.6313 20.9473 16.4823 20.7487 16.3991 20.5204C16.0745 19.8725 15.6546 19.2769 15.1534 18.7534C15.0281 18.6337 14.7547 18.3318 14.7547 18.3318L12.0061 20.265C11.0003 20.9713 10.1794 21.9094 9.61261 23C9.04587 24.0905 8.75 25.3015 8.75 26.5305V28.9844C10.1855 28.9844 12.7159 26.8784 14.2275 25.62C14.5393 25.3578 14.8543 25.0995 15.1725 24.8451C15.842 24.3433 16.6555 24.0709 17.4922 24.0683C18.3288 24.0658 19.144 24.3332 19.8166 24.8309C20.1277 25.0726 20.4892 25.3723 20.872 25.6895C22.3584 26.9221 24.8473 28.9844 26.25 28.9844V26.5305C26.2501 25.3016 25.9543 24.0906 25.3876 23.0001C24.821 21.9095 24.0001 20.9714 22.9945 20.265V20.265Z" fill="#0062CE"/>
                                        <path d="M27.8906 35H7.10938C6.96433 35 6.82524 34.9424 6.72268 34.8398C6.62012 34.7373 6.5625 34.5982 6.5625 34.4531C6.5625 34.3081 6.62012 34.169 6.72268 34.0664C6.82524 33.9639 6.96433 33.9062 7.10938 33.9062H27.8906C28.0357 33.9062 28.1748 33.9639 28.2773 34.0664C28.3799 34.169 28.4375 34.3081 28.4375 34.4531C28.4375 34.5982 28.3799 34.7373 28.2773 34.8398C28.1748 34.9424 28.0357 35 27.8906 35ZM27.8906 1.09375H7.10938C6.96433 1.09375 6.82524 1.03613 6.72268 0.933574C6.62012 0.831015 6.5625 0.691915 6.5625 0.546875C6.5625 0.401835 6.62012 0.262735 6.72268 0.160176C6.82524 0.057617 6.96433 0 7.10938 0L27.8906 0C28.0357 0 28.1748 0.057617 28.2773 0.160176C28.3799 0.262735 28.4375 0.401835 28.4375 0.546875C28.4375 0.691915 28.3799 0.831015 28.2773 0.933574C28.1748 1.03613 28.0357 1.09375 27.8906 1.09375Z" fill="#0062CE"/>
                                        </svg>
                                    </div>
                                </div>

                                <div className="hero__datepicker">
                                    <DatePickerElement />
                                </div>
                            </div>
                        </div>

                        <Button to='/'>Explore Now</Button>
                    </div>
                </div>
            </div>
        </Hero>
    )
}

export default HeroCover