import {useState} from 'react';

function InputBox({handleChange,text,placeholder,label}) {
    return (
        <>
        <div className='text-lg font-bold flex justify-start py-2 '>
            {label}
        </div>
        <div className=''>
            <input className='w-full py-2 px-4 border rounded border-slate-200 ' 
            type="text" onChange={handleChange} value={text} placeholder={placeholder} />
        </div>
        </>
    )
}

export default InputBox;