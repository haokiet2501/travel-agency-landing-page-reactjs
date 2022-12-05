import React from 'react'
import { ScrollToTopStyle } from './ScrollToTopStyled'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { useToggleHome } from '../../hook/useToggleHome'
import useChangeToggle from '../../hook/useChangeToggle'

const ScrollToTop = () => {
    const { handleToggleHome } = useToggleHome();
    const { scrollTop } = useChangeToggle();

    return (
        <ScrollToTopStyle scrollTop={scrollTop} onClick={handleToggleHome}>
            <AiOutlineArrowUp />
        </ScrollToTopStyle>
    )
}

export default ScrollToTop