import React from 'react'

const ImageSection = () => {
  return (
     <div className="relative mt-12 flex justify-center z-1">
          {/* This div represents the placeholder for the phone image */}
          <div  className="w-64 h-[520px]  rounded-3xl flex items-center justify-center relative">
            <img src="/Iphone14.svg" alt="" />
          </div>
      </div>
  )
}

export default ImageSection