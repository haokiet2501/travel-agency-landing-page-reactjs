import { useState, useEffect } from "react";


export default function useChangeToggle() {
    const [scrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        function handleChangeScroll() {
            if(window.scrollY >= 500) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        }

        window.addEventListener('scroll', handleChangeScroll);

        return () => {
            window.removeEventListener('scroll', handleChangeScroll);
        }
    }, [])

    return {
        scrollTop
    }
}