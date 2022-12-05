import React from 'react'
import
    { 
        Nav, NavLogo, NavBtn, NavLink, NavBtnLink
    } from './NavbarStyled'

import { FaBars } from 'react-icons/fa'
import useChangeScroll from '../../hook/useChangeScroll';
import { useToggleHome } from '../../hook/useToggleHome';

const Navbar = ({ toggle }) => {
    const { scrollNav, scrollShadow } = useChangeScroll();
    const { handleToggleHome } = useToggleHome();
    
    return (
        <Nav 
            className='nav' 
            scrollNav={scrollNav}
            scrollShadow={scrollShadow}
        >
            <div className='nav__container container'>
                <NavLogo onClick={handleToggleHome}>
                    T.TripD
                </NavLogo>
                <div className='nav__icons' onClick={toggle}>
                    <FaBars />
                </div>
                <div className='nav__menu'>
                    <div className='nav__item'>
                        <NavLink 
                            to='home'
                            smooth={true}
                            exact={true.toString()}
                            spy={true}
                        >
                            Home
                        </NavLink>
                    </div>
                    <div className='nav__item'>
                        <NavLink 
                            to='destinations'
                            exact={true.toString()}
                            smooth={true}
                            spy={true}
                            offset={-100}
                        >
                            Destinations
                        </NavLink>
                    </div>
                    <div className='nav__item'>
                        <NavLink 
                            to='about'
                            exact={true.toString()}
                            smooth={true}
                            spy={true}
                            offset={-80}
                        >
                            About
                        </NavLink>
                    </div>
                    <div className='nav__item'>
                        <NavLink 
                            to='tours'
                            exact={true.toString()}
                            smooth={true}
                            spy={true}
                            offset={-140}
                        >
                            Tours
                        </NavLink>
                    </div>
                    <div className='nav__item'>
                        <NavLink 
                            to='blog'
                            exact={true.toString()}
                            smooth={true}
                            spy={true}
                        >
                            Blog
                        </NavLink>
                    </div>
                </div>

                <NavBtn>
                    <NavBtnLink to='/'
                        white={true.toString()} secondary={true.toString()}
                    >
                        Sign Up
                    </NavBtnLink>
                    <NavBtnLink to='/'>Log In</NavBtnLink>
                </NavBtn>
            </div>
        </Nav>
    )
}

export default Navbar