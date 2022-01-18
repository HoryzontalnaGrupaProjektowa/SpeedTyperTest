import React from 'react'

const TextInput = ({
    value, setUserQuote
}) => {

    const onInput = (e) => {
        const {value} = e.target;
        setUserQuote(value)
    }

    return (
        <div>
            <textarea className='TextInput' value={value} onInput={onInput} placeholder='To begin the test start typing!'></textarea>
        </div>
    )
}

export default TextInput
