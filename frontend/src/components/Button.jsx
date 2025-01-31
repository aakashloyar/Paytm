import {useState} from 'react';

function Button({label,handleClick}) {
    return (
        <>
           <div >
            <button className='bg-gray-900 text-sm text-white rounded-lg w-full px-5 py-2.5' onClick={handleClick}>
                {label}
            </button>
           </div>

        </>
    )
}
export default Button;