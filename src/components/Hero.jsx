import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center max-w-[800px] w-full mx-auto p-4'>
      <p className='uppercase text-1xl sm:text-2xl md:text-3xl lg:text-4xl'>it's time to get</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Swole<span className='text-blue-400'>normous</span></h1>
      <Button func={() => {
        window.location.href = '#generate'
      }} text={'Accept and begin'}/>
    </div>
  )
}
