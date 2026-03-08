import React from 'react'
import Button from './Button'
const Card = () => {
  return (
    <div className='p-2 m-4 rounded shadow w-[200px]'>
        <div className='border-b-1 border-blue-100'>
            <small className='text-[9px]'>Product item #1</small>
        </div>
            <img className='h-20 w-[100%]' src="https://images.unsplash.com/photo-1761839257658-23502c67f6d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='my-3'>
            <div className='flex items-center justify-between'>
                <div>
                    Nike Air
                </div>
                <div className='rounded-full py-1 px-2 shadow text-[9px] bg-purple-200 text-purple-800 font-bold'>$999/-</div>
            </div>
            <p className='text-[12px] text-zinc-400'>
                Nike air shoes 9xl
            </p>
            <div className='flex gap-1 mt-3'>
                <span className='rounded-full py-1 px-2 shadow text-[9px] bg-purple-200 text-purple-800'>Wear</span>
                <span className='rounded-full py-1 px-2 shadow text-[9px] bg-purple-200 text-purple-800'>Fashion</span>
                <span className='rounded-full py-1 px-2 shadow text-[9px] bg-purple-200 text-purple-800'>Winter</span>
            </div>
        </div>
        <div className='mt-5 mb-1 h-[1px] bg-gray-200'></div>
        <div>
            <Button title={"Buy now"}/>
        </div>
    </div>
  )
}

export default Card
// card-wrapper
//  card header
//  card body
//  card footer