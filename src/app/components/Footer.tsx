import React from 'react'
import Image from 'next/image'

import logo from '../../asstes/Subtract.png'

const Footer = () => {
  return (
    <footer className="bg-white rounded-full py-8 px-12">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 font-n27 ml-10 mr-10">
        {/* Left Column: Contact Information */}
        <div className="flex flex-col items-start text-left">
          <p className="text-xl">T +48 794 508 965‬</p>
          <p className="text-xl">M michal@creve.pl</p>
        </div>

        {/* Center: Logo and Creve */}
        <div className="flex items-center space-x-4">
          {/* Replace the text below with your logo image */}
          <div className="h-12 w-12  flex items-center justify-center">
            {/* Logo Placeholder */}
            <Image src={logo} alt="Creve Logo" width={48} height={48} />
          </div>
          <p className="text-2xl font-extrabold text-primary">Creve</p>
        </div>

        {/* Right Column: Privacy Policy and Cookies */}
        <div className="flex flex-col items-end text-right">
          <p className="text-xl ">Polityka prywatności</p>
          <p className="text-xl ">Ciasteczka</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
