import {useState} from 'react';
import Heading from '../components/Heading'
import Button from '../components/Button'
function Send() {
    const user={
        firstName:"Aakash",
        lastName:"Loyar"
    }
    return (
       
        <div className='bg-slate-100 h-screen flex justify-center'>
            <div className='flex flex-col h-full justify-center'>
                <div className='h-min max-w-md p-4 space-y-12 w-96 bg-white shadow-2xl shadow-slate-300  rounded-lg '>

                    <div className='text-center'>
                        <Heading label={"Send Money"}/>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex'>
                            <div className='rounded-full h-12 w-12 bg-blue-400 flex justify-center mt-1 mr-2'>
                                <div className="flex flex-col justify-center h-full text-xl">
                                    {user.firstName[0]}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='h-full flex flex-col justify-center text-xl font-bold'>
                                    {user.firstName}   {user.lastName}
                                </div>
                            </div> 
                        </div>
                        <div className='text-sm'>
                            Amount (in Rs)
                        </div>
                        <div >
                            <input type="text" placeholder='Enter Amount' className='px-2 py-2 rounded border border-slate-100 w-full'/>
                        </div>
                        <div>
                            <Button label={'Initiate Transfer'} handleClick={(req,res)=>{

                            }}/>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
export default Send;