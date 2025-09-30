import React from 'react'

const ImageSection = () => {
  return (
     <div className="relative mt-12 flex justify-center">
          {/* This div represents the placeholder for the phone image */}
          <div className="w-64 h-[520px] border-4 border-dashed rounded-3xl flex items-center justify-center">
            <span className="text-sm">App Screenshot Here</span>
          </div>
      </div>
  )
}

export default ImageSection