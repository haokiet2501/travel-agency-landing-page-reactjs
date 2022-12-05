import React from 'react'
import { AboutStyle } from './AboutStyled'
import about1 from '../images/about1.png'
import about2 from '../images/about2.png'
import about3 from '../images/about3.png'

const About = () => {
    return (
        <AboutStyle className='about section container' id='destinations'>
            <div className="about__layouts grid">
                <div className="about__pictures">
                    <img src={about1} className="about__pictures-1" alt="" />
                    <img src={about2} className="about__pictures-2" alt="" />
                    <img src={about3} className="about__pictures-3" alt="" />
                </div>

                <div className="about__content">
                    <div className="about__heading">
                        We Recommend<br/> Beatiful Destinations<br/> Every Month
                    </div>
                    <div className="about__title">
                        Let's choose your dream destination here we provide many<br/> destinations and we offer the best destinations every week.
                    </div>

                    <div className="about__data">
                        <div>
                            <div className="about__data-statistical">
                                1500+
                            </div>
                            <span className='about__data-subtitle'>
                                Our Explores
                            </span>
                        </div>
                        <div>
                            <div className="about__data-statistical">
                                100+
                            </div>
                            <span className='about__data-subtitle'>
                                Destinations
                            </span>
                        </div>
                        <div>
                            <div className="about__data-statistical">
                                18+
                            </div>
                            <span className='about__data-subtitle'>
                                Years Experience
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </AboutStyle>
    )
}

export default About