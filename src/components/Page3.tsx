import React from 'react';
import { Bike, Leaf, Clock, Users } from 'lucide-react';

const Page3 = () => {
  return (
    <section className="px-6 py-20 md:px-20 bg-gradient-to-b from-white to-green-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            About YOLO Bike Rentals
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-100 text-red-600 rounded-full"></span>
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            At <span className="font-semibold text-red-600">YOLO Bike Rentals</span>, we're redefining urban mobility through community-powered transportation.
          </p>
        </div>

        {/* Main Content with Icons */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Bike size={36} className="text-red-500 mr-4" />
              <h3 className="text-2xl font-bold">Ride Your Way</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Whether you need a quick ride across town or a day-long adventure, our diverse fleet of bikes and scooters is available at your fingertips.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Users size={36} className="text-red-500 mr-4" />
              <h3 className="text-2xl font-bold">Community Powered</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Our hybrid model empowers both riders and vehicle owners to connect through a seamless, community-driven marketplace.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Clock size={36} className="text-red-500 mr-4" />
              <h3 className="text-2xl font-bold">24/7 Availability</h3>
            </div>
            <p className="text-lg leading-relaxed">
              With round-the-clock access and intuitive booking, YOLO helps make your daily commute more flexible and convenient.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Leaf size={36} className="text-red-500 mr-4" />
              <h3 className="text-2xl font-bold">Eco-Friendly Choice</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Join our mission for greener cities by choosing sustainable transportation options that reduce your carbon footprint.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-red-500 text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Join the YOLO Revolution</h3>
          <p className="text-lg mb-6">
            Experience the future of urban mobility with powerful tools for riders and vehicle owners alike.
          </p>
          <button className="cursor-pointer bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-green-50 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page3;