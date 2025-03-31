import React from 'react';
import aero from "../assets/aero.png";

function HeroSection() {
  return (
    <div id="home" className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-10 px-4 sm:px-6 sm:pt-16 lg:pt-8 xl:pt-16 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Premium Aviation</span>{' '}
                <span className="block text-blue-500 xl:inline">Materials & Coatings</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Directly sourced from PPG Industries, we provide industry-compliant solutions certified for aerospace applications.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow w-full sm:w-auto">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto">
                  <a
                    href="#about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-80 md:h-100 lg:w-full lg:h-full"
          src={aero}
          alt="Airplane with PPG coatings"
        />
      </div>
    </div>
  );
}

export default HeroSection;