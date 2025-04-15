import React from "react";
import { ArrowRight, Clock, Shield, MapPin } from "lucide-react";

const Page1 = () => {
  return (
    <div>
      <div className="pt-10">
        <div className="h-screen flex flex-col md:flex-row items-center w-full">
          {/* Left Content - Kept the same as before */}
          <div className="md:h-full w-full  p-8 md:p-12 flex flex-col justify-center">
            <div className="max-w-xl mx-auto md:mx-0">
              <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 font-medium text-sm mb-6">
                Ride with freedom
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-red-500">YOLO</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Your one-stop solution for convenient, affordable bike and scooter rentals.
                Experience the city on your own terms.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <button className="cursor-pointer flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Book Now <ArrowRight size={18} />
                </button>
                
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Clock size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Quick Booking</h3>
                    <p className="text-sm text-gray-600">Ready in minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Shield size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Safety First</h3>
                    <p className="text-sm text-gray-600">Well-maintained fleet</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <MapPin size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Everywhere</h3>
                    <p className="text-sm text-gray-600">Multiple locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Simplified Bento Grid of Images */}
          <div className="md:h-full w-full p-6 flex flex-col justify-center">
            <h1 className="text-center text-2xl mb-2 font-semibold">Available at multiple locations</h1>
            <div className="max-w-lg mx-auto w-full">
              
              {/* Simple 2x3 bento grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Large top image */}
                <div className="col-span-2 h-56 rounded-lg overflow-hidden bg-white shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hfGVufDB8fDB8fHww" 
                    alt="Goa"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Middle row - two equal columns */}
                <div className="h-40 rounded-lg overflow-hidden bg-white shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1681017628839-4d263afafc18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYW5jaGFsfGVufDB8fDB8fHww" 
                    alt="Himanchal"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="h-40 rounded-lg overflow-hidden bg-white shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SmFpcHVyfGVufDB8fDB8fHww" 
                    alt="Jaipur"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Bottom row - two equal columns */}
                <div className="h-40 rounded-lg overflow-hidden bg-white shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Kashmir"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="h-40 rounded-lg overflow-hidden bg-white shadow-sm">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1661878942694-6adaa2ce8175?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFuYWxpfGVufDB8fDB8fHww" 
                    alt="Manali"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;