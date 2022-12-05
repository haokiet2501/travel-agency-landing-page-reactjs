import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { SideBarStyle, SideBarLink, SideBarBtn } from './SideBarStyled'

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarStyle className='sidebar' isOpen={isOpen} onClick={toggle}>
            <div className="sidebar__container">
                <div className="sidebar__icons" onClick={toggle}>
                    <FaTimes />
                </div>

                <div className="sidebar__wrapper">
                    <div className="sidebar__menu">
                        <SideBarLink 
                            to='home'
                            onClick={toggle}
                            duration={500}
                            smooth={true}
                            spy={true}
                            exact={true.toString()}
                        >
                            Home
                        </SideBarLink>
                        <SideBarLink 
                            to='destinations'
                            onClick={toggle}
                            duration={500}
                            smooth={true}
                            spy={true}
                            exact={true.toString()}
                        >
                            Destinations
                        </SideBarLink>
                        <SideBarLink 
                            to='about'
                            onClick={toggle}
                            duration={500}
                            smooth={true}
                            spy={true}
                            exact={true.toString()}
                        >
                            About
                        </SideBarLink>
                        <SideBarLink 
                            to='tours'
                            onClick={toggle}
                            duration={500}
                            smooth={true}
                            spy={true}
                            exact={true.toString()}

                        >
                            Tours
                        </SideBarLink>
                        <SideBarLink 
                            to='blog'
                            onClick={toggle}
                            duration={500}
                            smooth={true}
                            spy={true}
                            exact={true.toString()}
                        >
                            Blog
                        </SideBarLink>
                    </div>

                    <div className="sidebar__btn">
                        <SideBarBtn>Sign In</SideBarBtn>
                        <SideBarBtn 
                            to="/" yellow={true.toString()} blue={true.toString()}
                        >
                            Log In
                        </SideBarBtn>
                    </div>
                </div>
            </div>
        </SideBarStyle>
    )
}

export default SideBar