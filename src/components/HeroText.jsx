import React from 'react'
import ArrowIcon from '../components/Arrow'
const HeroText = () => {
  return (
     <main className="text-center pt-20 pb-12">
        <div className="container mx-auto px-6">
          
          <p className="mb-4 text-lg font-medium">
            Stay On Top Of Tasks, Not Lost In Them.
          </p>

          
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto">
            Manage work, goals & ideas in one place.
          </h1>

        
          <p className="max-w-2xl mx-auto text-lg mb-10">
            Simplify analytics with one smart dashboard — track, measure, and optimize performance so your team moves faster and smarter.
          </p>

          
          <div className="flex justify-center items-center space-x-4">
            <button className="px-8 py-3 rounded-lg font-bold">
              Start Free Today
            </button>
            <button className="flex items-center px-8 py-3 border rounded-lg font-bold">
              <span>See how it works</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </main>
  )
}

export default HeroText