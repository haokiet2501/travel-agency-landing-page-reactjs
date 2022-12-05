import {useState, useRef, useEffect} from 'react'

export default function useClickOutSide() {
    const [isActive, setIsActive] = useState(false);
    const nodeRef = useRef(null)

    useEffect(() => {
        function handleClick(e) {
            if(nodeRef.current && !nodeRef.current.contains(e.target))
            {
                setIsActive(false);
            }
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    return {
        isActive, setIsActive, nodeRef
    }
}