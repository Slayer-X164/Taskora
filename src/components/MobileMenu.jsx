import React from 'react'

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-blue-50 z-10 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#" className="text-2xl font-semibold hover:underline" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#" className="text-2xl font-semibold hover:underline" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#" className="text-2xl font-semibold hover:underline" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#" className="text-2xl font-semibold hover:underline" onClick={() => setIsMenuOpen(false)}>Blog</a>
           <button className=" px-6 py-3 shadow-sm shadow-cyan-950/30 bg-neutral-50 text-cyan-950 rounded-full font-medium cursor-pointer hover:bg-neutral-200">
              Download The App
            </button>
      </div>
    </div>
  );
}

export default MobileMenu