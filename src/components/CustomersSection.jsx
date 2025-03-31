import React from 'react';

function CustomersSection() {
  return (
    <div id="customers" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Trusted By</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Valued Customers
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We're proud to serve leading aerospace manufacturers around the world.
          </p>
        </div>
        
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-48 h-24 flex items-center justify-center mb-4">
                {/* Replace with Boeing logo */}
                <div className="text-3xl font-bold text-gray-800">Boeing</div>
              </div>
              <p className="text-center text-gray-600">
                Providing aviation-grade coatings and sealants for Boeing aircraft worldwide.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-48 h-24 flex items-center justify-center mb-4">
                {/* Replace with Airbus logo */}
                <div className="text-3xl font-bold text-gray-800">Airbus</div>
              </div>
              <p className="text-center text-gray-600">
                Supplying premium materials for Airbus commercial aircraft production.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-48 h-24 flex items-center justify-center mb-4">
                {/* Replace with PPG Industries logo */}
                <div className="text-3xl font-bold text-gray-800">PPG Industries</div>
              </div>
              <p className="text-center text-gray-600">
                Official distributor of PPG aerospace products and technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersSection;