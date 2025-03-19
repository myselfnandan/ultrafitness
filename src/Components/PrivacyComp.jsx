'use client'

import { CustomImage } from '../Components/image'

export default function Landing() {
  return (
    <div className="inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy pb-10">
      
      <div className="relative isolate px-6 pt-14 lg:px-8 ">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
        <div className="mx-auto max-w h-auto flex flex-col items-centerjustify-around md:flex-row gap-20 mt-20">
          
          <div className="text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
           
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 animate-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Privacy Policy
            </span>
          </h1>
            <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8 text-justify md:tex-2xl text-blue-200 mb-8 max-w-2xl animate-fade-in">
            At Code Latent, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you participate in our 7-day bootcamp on Data Structures and Algorithms (DSA) in Java and any subsequent paid courses
            </p>

          </div>
          <div className='flex items-center justify-center h-auto max-w-2xl text-blue-200'>
            <CustomImage src="Mobileencryption-amico.svg" alt="" className=' md:w-[800px] md:h-[500px] h-auto w-auto' 
            width={500}
            height={500}/>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-10rem)]"
        >
        </div>
      </div>
    </div>
  )
}
