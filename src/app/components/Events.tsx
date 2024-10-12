import React from 'react'

const Events = () => {
  return (
    <section className="w-full px-6 py-12 text-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="font-humane text-[40px] sm:text-[80px] md:text-[90px] lg:text-[120px] font-extrabold whitespace-nowrap">
          TWORZYMY NIEZAPOMNIANE WYDARZENIA
        </h2>
      </div>

      {/* Buttons in a column */}
      <div className="flex flex-col space-y-4 max-w-md mx-auto">
        {/* Each button with consistent width */}
        <button className="bg-white text-primary rounded-full py-3 px-6 font-n27 text-lg transition-colors w-full max-w-xs mx-auto">
          imprezy integracyjne
        </button>
        <button className="bg-white text-primary rounded-full py-3 px-6 font-n27 text-lg transition-colors w-full max-w-xs mx-auto">
          konferencje
        </button>
        <button className="bg-white text-primary rounded-full py-3 px-6 font-n27 text-lg transition-colors w-full max-w-xs mx-auto">
          spotkania biznesowe
        </button>
        <button className="bg-white text-primary rounded-full py-3 px-6 font-n27 text-lg transition-colors w-full max-w-xs mx-auto">
          pikniki firmowe
        </button>
        <button className="bg-white text-primary rounded-full py-3 px-6 font-n27 text-lg transition-colors w-full max-w-xs mx-auto">
          jubileusze
        </button>
        <button className="bg-white text-primary rounded-full py-3 px-6 font-n27 text-lg transition-colors w-full max-w-xs mx-auto">
          materiały marketingowe
        </button>
      </div>
    </section>
  )
}

export default Events
