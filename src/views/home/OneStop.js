import React from 'react'

const OneStop = () => {
  return (
    <div className='sm:flex sm:justify-between py-3 bg-[#F9FBFD] px-4 sm:px-6 lg:px-8 '>
        <div className='py-2'>
            <p className='text-2xl sm:text-3xl font-extrabold text-center sm:text-start'>One Stop.</p>
            <p className='text-2xl sm:text-3xl font-extrabold text-center sm:text-start'>Four{" "}<span className='text-lightBlue'>Possibilities</span>.</p>
        </div>
        <div className='flex justify-between'>
            <span className='mr-6 sm:w-1/4'>
                <p className='text-xl sm:text-2xl font-bold'>3M</p>
                <p>Active users</p>
            </span>
            <span className='mr-6 sm:w-1/4'>
                <p className='text-lg sm:text-2xl font-bold sm:font-bold'>60M</p>
                <p>Links & QR codes created</p>
            </span>
            <span className='mr-6 sm:w-1/4'>
                <p className='text-lg sm:text-2xl font-bold sm:font-bold'>1B</p>
                <p>Active users</p>
            </span>
            <span className='sm:mr-6 sm:w-1/4'>
                <p className='text-lg sm:text-2xl font-bold sm:font-bold'>300K</p>
                <p>App Integration</p>
            </span>
            
        </div>
    </div>
  )
}

export default OneStop;