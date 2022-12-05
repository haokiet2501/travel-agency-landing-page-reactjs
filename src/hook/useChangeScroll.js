import { useState, useEffect } from "react";

export default function useChangeScroll() {
    const [scrollNav, setScrollNav] = useState(false);
    const [scrollShadow, setScrollShadow] = useState(false);

    useEffect(() => {
        function changeNav() {
            if(window.scrollY >= 50) {
                setScrollNav(true);
                setScrollShadow(true);
            } else {
                setScrollNav(false);
                setScrollShadow(false);
            }
        }

        window.addEventListener('scroll', changeNav)
    
        return () => {
            window.removeEventListener('scroll', changeNav)
        }
    }, [])

    return {
        scrollNav,
        scrollShadow
    }
}