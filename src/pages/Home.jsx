import React, { useState } from 'react'
import HeroCover from '../components/Hero/HeroCover'
import Navbar from '../components/NavBar/Navbar'
import About from '../components/About/About'
import Features from '../components/Features/Features'
import ReviewFeatures from '../components/ReviewFeatures/ReviewFeatures'
import Testimonials from '../components/Testimonials/Testimonials'
import Cta from '../components/Cta/Cta'
import Footer from '../components/Footer/Footer'
import SideBar from '../components/SideBar/SideBar'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <div className='main'>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroCover />
            <About />
            <Features />
            <ReviewFeatures />
            <Testimonials />
            <Cta />
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Home
