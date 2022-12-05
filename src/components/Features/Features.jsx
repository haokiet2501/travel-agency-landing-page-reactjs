import React from 'react'
import { FeaturesStyle } from './FeaturesStyled'
import Avatar from '../images/features-avatar.png'
import FeaturesCover from '../images/features-cover.png'
import Features2 from '../images/features2.png'

const Features = () => {
    return (
        <FeaturesStyle className='features container section' id='about'>
            <div className="features__title">
                <div className="features__heading">
                    Why You Should Choose Us
                </div>
                <span className="features__subheading">
                    You should choose us because we provide the best accommodition and we have<br/> sorted all the hotels here based on their quality.
                </span>
            </div>

            <div className="features__content">
                <div className="features__choose">
                    <div>
                        <div className="features__number" data-title="01"></div>
                        <div className="features__text">
                            We provide the best choice of hotels for you to stay
                        </div>
                        <div className="features__subtext">
                            We always prioritize customer comfort and satisfication, That’s why we only accept the best hotel
                        </div>
                    </div>
                    <div>
                        <div className="features__number" data-title="02"></div>
                        <div className="features__text">
                            We provide the best choice of hotels for you to stay
                        </div>
                        <div className="features__subtext">
                            We always prioritize customer comfort and satisfication, That’s why we only accept the best hotel
                        </div>
                    </div>
                    <div>
                        <div className="features__number" data-title="03"></div>
                        <div className="features__text">
                            We provide the best choice of hotels for you to stay
                        </div>
                        <div className="features__subtext">
                            We always prioritize customer comfort and satisfication, That’s why we only accept the best hotel
                        </div>
                    </div>
                </div>

                <div className="features__cover">
                    <div>
                        <img src={FeaturesCover} className='features__cover-img1' alt="" />
                    </div>
                    <div className="features__avatar">
                        <div>
                            <img src={Avatar} className="features__pictureAuth" alt="" />
                        </div>

                        <div>
                            <div className='features__Auth'>
                                <strong className="features__author">
                                    Cravic Mario
                                </strong>
                                <span className='features__rating'>Give rating{" "}
                                    <span className='features__rating-num'>4.5</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="features__pictures">
                        <img src={Features2} className='features__img2' alt="" />
                    </div>
                </div>
            </div>
        </FeaturesStyle>
    )
}

export default Features