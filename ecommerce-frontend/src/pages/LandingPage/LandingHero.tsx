import React from "react";

type Props = {};

export default function LandingHero({}: Props) {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        // style={{
        //   backgroundImage:
        //     'url("https://via.placeholder.com/1500x800?text=Your+Product+Image")',
        // }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-100 mb-4">
            Discover the Best Products for You
          </h1>
          {/* Hero Description */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Shop our exclusive collection of top-rated products and enjoy
            amazing deals. Quality and convenience, all in one place.
          </p>
          {/* Call to Action Buttons */}
          <div className="flex justify-center gap-6">
            <a
              href="/shop"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-300">
              Shop Now
            </a>
            <a
              href="/offers"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-300">
              View Offers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
