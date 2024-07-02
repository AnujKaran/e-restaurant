import React from 'react'
import iconSuccess from "../assest/img/success.gif"

const Success = () => {
  return (
    <div className='w-full h-full flex justify-center items-center pt-10 px-2  md:p-10'>
        <div className='bg-slate-200 w-full max-w-md text-center flex justify-center items-center flex-col rounded py-10'>
            <div className=''>
                <img src={iconSuccess} className="h-40" />
            </div>
            <h1 className='text-green-600 font-bold text-lg py-3 '>payment successful</h1>
            <p className='text-gray-500'>Thank you for your purchase</p>
            <p className='text-gray-500'>your order on the way :)</p>
        </div>
    </div>
  )
}

export default Success