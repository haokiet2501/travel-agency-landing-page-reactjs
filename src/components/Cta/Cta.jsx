import React from 'react'
import { CtaStyle } from './CtaStyled'
import { Button } from '../Button/Button'

const Cta = () => {
    return (
        <CtaStyle className='cta container'>
            <div className="cta__content">
                <div className="cta__heading">
                    Let's Don't Miss the 50% Discount <br/>& Explore the beauty of the world
                </div>

                <div className="cta__subheading">
                    We have many special offers espesially for you
                </div>

                <Button to='/' className='cta__btn'>Get Started</Button>
            </div>
        </CtaStyle>
    )
}

export default Cta