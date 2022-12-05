import React from 'react'
import { DropDownStyle } from './DropDownStyled'
import useClickOutSide from '../../hook/useClickOutSide';

const DropDown = ({selected, setSelected}) => {
    const options = ['New Zelenda', 'Milan', 'France', 'Bali']
    const { isActive, setIsActive, nodeRef } = useClickOutSide();

    return (
        <DropDownStyle className='dropdown'>
            <div 
                className="dropdown__btn"
                onClick={() => setIsActive(!isActive)}
                ref={nodeRef}
            >
                <span className='dropdown__selected'>Location</span>
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 6.5H6L8.5 0.5" stroke="#0061CC"/>
                </svg>
            </div>

            {
                isActive && 
                <div className="dropdown__content">
                    {options.map((item) => (
                        <div 
                            className="dropdown__item"
                            onClick={(e) => {setSelected(item)
                            setIsActive(false)}}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            }

            <div className="dropdown__result">
                {selected}
            </div>
        </DropDownStyle>
    )
}

export default DropDown