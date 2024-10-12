import React from 'react'

const Form = () => {
  return (
    <section className="w-full px-4 md:px-6 py-12">
      {/* Heading */}
      <h2 className="text-left text-4xl sm:text-5xl lg:text-[100px] text-white font-extrabold font-humane mb-6 sm:mb-10">
        NAPISZ DO NAS!
      </h2>

      {/* Form */}
      <div className="space-y-8">
        {/* First Row: Email and Phone Input */}
        <div className="flex flex-col md:flex-row md:space-x-64 space-y-6 md:space-y-0 justify-center">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Twój e-mail"
            className="bg-white  rounded-full py-3 px-6 w-full md:w-1/3 lg:w-1/4 text-base md:text-base lg:text-lg text-primary focus:outline-none shadow-lg placeholder-primary placeholder-text-lg placeholder-font-bold font-n27"
          />

          {/* Phone Input */}
          <input
            type="tel"
            placeholder="Zadzwoń: +48 794 508 965‬"
            className="bg-white rounded-full py-3 px-6 w-full md:w-1/3 lg:w-1/4 text-base md:text-base lg:text-lg text-primary focus:outline-none shadow-lg placeholder-primary placeholder-font-bold placeholder-text-lg font-n27"
          />
        </div>

        {/* Second Row: Textarea and Email Input */}
        <div className="flex flex-col md:flex-row md:space-x-64 space-y-6 md:space-y-0 justify-center">
          {/* Textarea */}

          <textarea
            placeholder="W czym możemy Ci pomóc?"
            className="bg-white rounded-[50px] py-3 px-6 h-40 md:h-40 w-full md:w-1/3 lg:w-1/4 text-base md:text-base lg:text-lg text-primary focus:outline-none shadow-lg placeholder-primary placeholder-font-bold placeholder-text-lg font-n27 self-start"
          />

          {/* Email Input (right of textarea on larger screens) */}
          <input
            type="email"
            placeholder="Napisz: michal@creve.pl"
            className="bg-white rounded-full py-3 px-6 w-full md:w-1/3 lg:w-1/4 text-base md:text-base lg:text-lg text-primary focus:outline-none shadow-lg placeholder-primary placeholder-font-bold placeholder-text-lg font-n27 self-start"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="text-primary rounded-full w-full md:w-auto py-3 px-12 sm:px-24 font-medium bg-white transition-colors text-lg sm:text-xl lg:text-2xl font-n27 shadow-lg">
            Wyślij!
          </button>
        </div>
      </div>
    </section>
  )
}

export default Form
