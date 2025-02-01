import {useState} from 'react';
import {Link} from 'react-router-dom'
function BottomWarning({label,buttonText,to}) {
    return (
        <>
            <div className='text-sm flex justify-center py-2 '>
                {label}

                <Link to={to} className='pointer underline  pl-2'>
                   {buttonText}
                </Link>
            </div>
                
        </>
    )
}
export default BottomWarning;