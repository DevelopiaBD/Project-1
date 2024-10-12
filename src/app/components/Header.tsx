import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      {/* Links will be shown only on screens below 998px */}
      <div className="flex flex-col items-center font-n27 font-medium lg:hidden mt-12">
        {/* Add vertical spacing between the links with space-y-12 */}
        <div className="flex flex-col space-y-12 mt-4 mb-10">
          <Link
            href="/"
            className="bg-white text-gray-900 rounded-full py-1 px-12 transition-colors text-center"
          >
            o nas
          </Link>
          <Link
            href="/about"
            className="bg-white text-gray-900 rounded-full py-1 px-10 transition-colors text-center"
          >
            partnerzy
          </Link>
          <Link
            href="/contact"
            className="bg-white text-gray-900 rounded-full py-1 px-10 transition-colors text-center"
          >
            kontakt
          </Link>
        </div>
      </div>

      {/* Heading section */}
      <div className="flex flex-col items-center justify-center w-full h-auto lg:h-screen lg:mt-14 mt-16">
        <h1 className="font-extrabold text-[40px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] leading-none text-white mb-4 text-center">
          CREATIVE EVENT CREW CREATIVE EVENT CREW
        </h1>
        <h1 className="font-extrabold text-[40px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] leading-none text-white text-center">
          CREATIVE EVENT CREW CREATIVE EVENT CREW
        </h1>
      </div>
    </>
  )
}

export default Header
