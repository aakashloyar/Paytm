import {useState} from 'react';

function Appbar() {
    return (
        <>
        <div className='shadow h-16 flex justify-between '>
            <div className='flex flex-col justify-center h-full ml-4'>
                PayTM App
            </div>
            <div  className='flex flex-col h-full justify-center'>
                <div className='flex'>
                    <div className='flex flex-col justify-center h-full mr-4'>
                    Hello
                    </div>
                    <div className='rounded-full h-12 w-12 mr-2 bg-slate-200 flex justify-center'>
                        <div className='flex flex-col justify-center h-full text-xl'>
                            U
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Appbar;

