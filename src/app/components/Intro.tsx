import React from 'react'

const Intro = () => {
  return (
    <section className="w-full px-6 py-12 text-white">
      <div className="flex flex-col justify-between items-start">
        {/* Combined Heading and Subheading on the Same Line */}
        <div className="flex mb-4 md:mb-0">
          <div className="flex items-baseline">
            <h1 className="font-humane text-[60px] sm:text-[80px] md:text-[140px] lg:text-[140px] mr-4 font-extrabold">
              CREVE
            </h1>
            <p className="font-n27 text-lg sm:text-xl md:text-2xl ml-4 sm:ml-6 font-medium">
              kim jesteśmy?
            </p>
          </div>
        </div>

        {/* Right Side: Description Paragraph Below Heading */}
        <div className="max-w-lg mt-2 ml-auto flex justify-end ">
          {/* Ensure the paragraph is right-aligned even on smaller screens */}
          <p className="font-n27 text-xl md:text-3xl font-normal ml-12 md:ml-0">
            CREVE to nie tylko kreatywna agencja eventowa - to Wasz wspierający
            partner w dążeniu do niezapomnianych doświadczeń i wspomnień.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro
