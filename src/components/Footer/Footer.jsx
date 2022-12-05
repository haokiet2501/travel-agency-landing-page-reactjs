import React from 'react'
import { FooterStyle } from './FooterStyled'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <FooterStyle className='container'>
            <footer className="footer">
                <div className="footer__nav">
                    <div>
                        <Link className='footer__logo'>
                            T.Tripd
                        </Link>
                    </div>
                    <div className='footer__items'>
                        <Link className='footer__link'>About Us</Link>
                        <Link className='footer__link'>Explore</Link>
                        <Link className='footer__link'>Booking</Link>
                        <Link className='footer__link'>Contact</Link>
                    </div>
                    <div>
                        <div className="footer__number">
                            +88 (0173 75 785 049)
                        </div>
                    </div>
                </div>
                <div className="footer__line"></div>
                <div className="footer__company">
                    <span className="footer__brand">
                        2022 PT. T{'>'}TRIPD All right reserved
                    </span>

                    <div className="footer__layouts">
                        <div className="footer__privacy">
                            Privacy Policy
                        </div>
                        <div className="footer__term">
                            Terms & Condition
                        </div>
                    </div>
                </div>
            </footer>
        </FooterStyle>
    )
}

export default Footer