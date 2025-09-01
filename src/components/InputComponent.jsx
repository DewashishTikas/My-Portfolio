import React from 'react'

export default function InputComponent({ id, name, type, css, error, value, setValue }) {
    return (
        <div className='text-white relative'>
            <label htmlFor={id}>{name}</label>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    name={name}
                    rows={5}
                    className={`${css} w-full outline-none border border-white rounded-sm my-3 px-4 py-1 focus:shadow-sm focus:shadow-white transition-all duration-75`}
                    value={value}
                    onChange={(e) => setValue(e)}
                />
            ) : (
                <input
                    id={id}
                    name={name}
                    className={`${css} w-full outline-none border border-white rounded-sm my-5 px-4 py-1 focus:shadow-sm focus:shadow-white transition-all duration-75`}
                    value={value}
                    onChange={(e) => setValue(e)}
                />
            )}
            <p className='text-red-300 md:text-md text-xs absolute bottom-0'>{error}</p>
        </div>  
    )
}
