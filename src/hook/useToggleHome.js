import { animateScroll as scroll } from "react-scroll";

export function useToggleHome() {
    function handleToggleHome() {
        scroll.scrollToTop()
    }

    return {
        handleToggleHome
    }
}