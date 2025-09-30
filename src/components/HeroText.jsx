import React from 'react'
import ArrowIcon from '../components/Arrow'
const HeroText = () => {
  return (
     <main className="text-center pt-20 ">
        <div className="container mx-auto px-6">

          <p className="mb-4 text-sm font-sm text-cyan-950">
            Stay On Top Of Tasks, Not Lost In Them.
          </p>


         <div className='bg-gradient-to-br from-cyan-950 via-blue-950 to-sky-700 bg-clip-text'>
             <h1 className="text-5xl md:text-6xl text-transparent font-semibold leading-tight mb-6 max-w-4xl mx-auto">
            Manage work, goals & <br /> ideas in one place.
          </h1>
         </div>


          <p className="max-w-2xl mx-auto text-md mb-10 text-cyan-950 font-medium   ">
            Simplify analytics with one smart dashboard — track, measure, and optimize performance so your team moves faster and smarter.
          </p>


          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="cursor-pointer  px-8 py-3 shadow-lg shadow-cyan-950/30 bg-[#516CA2] text-cyan-50 rounded-full font-medium">
              Start Free Today
            </button>
            <button className="cursor-pointer  flex items-center px-6 py-3  shadow-lg shadow-cyan-950/30 rounded-full bg-neutral-50 font-medium">
              <span>See how it works</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </main>
  )
}

export default HeroText