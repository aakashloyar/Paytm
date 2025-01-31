import {useState} from 'react';

function Heading({label}) {
    return (
        <>
        <div className='font-bold text-4xl  text-black-900 pt-6'>
            {label}
        </div>

        </>
    )
}
export default Heading;