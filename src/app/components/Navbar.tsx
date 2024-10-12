import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="px-6 py-4 flex items-center justify-between">
      <div className="flex items-center mr-8">
        {/* Responsive SVG logo */}
        <svg
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" // Responsive classes
          width="101"
          height="101"
          viewBox="0 0 101 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0.14208C0.0330702 0.0588443 0.114343 0 0.209361 0H100.42C100.545 0 100.645 0.100822 100.645 0.225193V16.7121C100.645 25.7911 93.2854 33.1511 84.2063 33.1511H51.8185C42.7395 33.1511 35.3794 40.5112 35.3794 49.5902V50.3307L31.5537 49.6266C15.7996 46.7274 3.63084 32.5926 1.65034 14.8919L0 0.14208ZM1.33052e-05 100.519C0.033091 100.602 0.114351 100.661 0.209355 100.661H100.42C100.545 100.661 100.645 100.56 100.645 100.436V83.9497C100.645 74.8707 93.2853 67.5106 84.2063 67.5106H51.8185C42.7395 67.5106 35.3794 60.1506 35.3794 51.0715V50.3307L31.5537 51.0347C15.7996 53.9339 3.63084 68.0687 1.65034 85.7694L1.33052e-05 100.519Z"
            fill="#F5F5EB"
          />
        </svg>
      </div>

      {/* Hidden links below 998px (md breakpoint is close to 998px) */}
      <div className="flex-grow flex justify-end font-n27 font-medium">
        <div className="hidden lg:flex space-x-40">
          <Link
            href="/"
            className="bg-white text-gray-900 rounded-full py-1 px-12 transition-colors"
          >
            o nas
          </Link>
          <Link
            href="/about"
            className="bg-white text-gray-900 rounded-full py-1 px-10 transition-colors"
          >
            partnerzy
          </Link>
          <Link
            href="/contact"
            className="bg-white text-gray-900 rounded-full py-1 px-10 transition-colors"
          >
            kontakt
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
