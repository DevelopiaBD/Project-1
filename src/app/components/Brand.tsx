import React from 'react'
import Image from 'next/image' // Importing Next.js Image component
import Brand1 from '../../asstes/Brand-1.png'
import Brand3 from '../../asstes/Brand-3.png'
import Brand4 from '../../asstes/Brand-4.png'
import Brand5 from '../../asstes/Brand-5.png'
import Brand6 from '../../asstes/Brand-6.png'

const Brand = () => {
  return (
    <section className="w-full px-6 py-12 text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-humane text-[40px] sm:text-[80px] md:text-[90px] lg:text-[120px] font-extrabold whitespace-nowrap">
          TWORZYLIŚMY DLA...
        </h2>
      </div>

      {/* Brand logos in two rows and three columns on all screen sizes */}
      <div className="grid grid-cols-3 gap-8 justify-items-center">
        {/* Each brand logo in a rectangular white background */}
        <div className="bg-white rounded-full p-4 w-40 h-20 md:w-64 md:h-32 flex items-center justify-center fix-1">
          <Image
            src={Brand1}
            alt="Brand 1"
            width={120} // Specify the width of the image
            height={80} // Specify the height of the image
            className="h-auto"
          />
        </div>
        <div className="bg-white rounded-full p-4 w-40 h-20 md:w-64 md:h-32 flex items-center justify-center fix-1">
          <h1 className="text-black font-extrabold font-humane text-3xl md:text-6xl">
            iron
            <span className="relative text-red-600">
              m
              <span className="absolute top-[5px] md:top-[10px] right-[2px] md:right-[5px] w-1 md:w-2 h-1 md:h-2 bg-red-600 rounded-full"></span>
            </span>
            an
          </h1>
        </div>

        <div className="bg-white rounded-full p-4 w-40 h-20 md:w-64 md:h-32 flex items-center justify-center fix-1">
          <Image
            src={Brand3}
            alt="Brand 3"
            width={120}
            height={80}
            className="h-auto "
          />
        </div>
        <div className="bg-white rounded-full p-4 w-40 h-20 md:w-64 md:h-32 flex items-center justify-center fix-1">
          <Image
            src={Brand4}
            alt="Brand 4"
            width={120}
            height={80}
            className="h-auto "
          />
        </div>
        <div className="bg-white rounded-full p-4 w-40 h-20 md:w-64 md:h-32 flex items-center justify-center fix-1">
          <Image
            src={Brand5}
            alt="Brand 5"
            width={120}
            height={80}
            className="h-auto "
          />
        </div>
        <div className="bg-white rounded-full p-4 w-40 h-20 md:w-64 md:h-32 flex items-center justify-center fix-1">
          <Image
            src={Brand6}
            alt="Brand 6"
            width={120}
            height={80}
            className="h-auto "
          />
        </div>
      </div>
    </section>
  )
}

export default Brand
