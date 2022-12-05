import React, { useState } from 'react'
import { DatePickerStyle } from './DatePickerStyled'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerElement = () => {
    const [startedDate, setStartedDate] = useState(new Date());
    return (
        <DatePickerStyle className='date'>
            <div className="date__heading">
                <span className='date__title'>DATE</span>
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 6.5H6L8.5 0.5" stroke="#0061CC"/>
                </svg>
            </div>
        
            <DatePicker 
                className='date'
                selected={startedDate}
                onChange={(date) => setStartedDate(date)}
                dateFormat="MMMM d, yyyy"
            >
            </DatePicker>
        </DatePickerStyle>
    )
}

export default DatePickerElement