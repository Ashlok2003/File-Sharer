import React, { useId } from 'react'

const Input = ({ inputType = 'text', inputClassName, labelText, labelClassName, ...props }, ref) => {
    const id = useId();
    return (
        <>
            {
                labelText && <label htmlFor={id} className={labelClassName}>{labelText}</label>
            }
            <input type={inputType} ref={ref} className={inputClassName} {...props} id={id} />
        </>
    )
}

export default React.forwardRef(Input);