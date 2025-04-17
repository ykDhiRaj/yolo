"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, Info, Shield, MapPin, Battery, Zap } from "lucide-react";

// Define TypeScript interfaces for our data
interface ScooterData {
  id: string;
  name: string;
  model: string;
  type: string;
  batteryCapacity: string;
  range: string;
  maxSpeed: string;
  chargingTime: string;
  description: string;
  location: string;
  rentalPrice: string;
  availableColors: string[];
  features: string[];
  images: string[];
  rating: number;
  reviews: number;
}

type Params = {
  scooterid: string;
}

export default function ScooterPage() {
  const params = useParams<Params>();
  const scooterid = params.scooterid;
  const router = useRouter();
  const [scooterData, setScooterData] = useState<ScooterData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fake data for now – replace with actual fetch from API
  const dummyScooter: ScooterData = {
    id: scooterid,
    name: "Ather 450X",
    model: "2023",
    type: "Electric Scooter",
    batteryCapacity: "3.7 kWh",
    range: "146 km",
    maxSpeed: "90 km/h",
    chargingTime: "5.5 hours",
    description: "The Ather 450X is a premium electric scooter with a sleek design and smart features. Experience smooth acceleration, responsive handling, and advanced connectivity in an eco-friendly package.",
    location: "Koramangala, Bangalore",
    rentalPrice: "₹599",
    availableColors: ["Mint Green", "Space Grey", "White"],
    features: ["Touchscreen Display", "Navigation", "Bluetooth", "Parking Assist", "Fast Charging"],
    images: [
      "https://i.imgur.com/R3RgVdZ.png",
      "https://i.imgur.com/mwTgeqv.png",
      "https://i.imgur.com/hWXAzum.png",
      "https://i.imgur.com/dQjvmkQ.png"
    ],
    rating: 4.9,
    reviews: 42,
  };

  useEffect(() => {
    // Simulate loading data from API
    const fetchData = async () => {
      setIsLoading(true);
      // In real app, fetch from API based on scooterid
      // const response = await fetch(`/api/scooters/${scooterid}`);
      // const data = await response.json();
      
      // Simulate network delay
      setTimeout(() => {
        setScooterData(dummyScooter);
        setIsLoading(false);
      }, 800);
    };

    fetchData();
  }, [scooterid]);

  const nextImage = () => {
    if (!scooterData) return;
    
    setCurrentImageIndex((prevIndex) => 
      prevIndex === scooterData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    if (!scooterData) return;
    
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? scooterData.images.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!scooterData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Scooter not found</h2>
        <p className="mb-6">The scooter you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => router.push('/scooters')}>
          Browse All Scooters
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Back button */}
      <Button 
        variant="outline" 
        className="mb-6 flex items-center gap-2"
        onClick={() => router.back()}
      >
        <ChevronLeft size={16} />
        Back to listings
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Carousel */}
        <div className="space-y-4">
          <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src={scooterData.images[currentImageIndex]} 
              alt={scooterData.name} 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <Button 
                onClick={prevImage}
                size="icon"
                variant="secondary"
                className="rounded-full bg-white/80 hover:bg-white"
              >
                <ChevronLeft />
              </Button>
              <Button 
                onClick={nextImage}
                size="icon"
                variant="secondary"
                className="rounded-full bg-white/80 hover:bg-white"
              >
                <ChevronRight />
              </Button>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {scooterData.images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-green-500' : 'bg-white/60'}`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Thumbnail strip */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {scooterData.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`relative w-20 h-16 rounded-md overflow-hidden flex-shrink-0 ${
                  idx === currentImageIndex ? 'ring-2 ring-green-500' : ''
                }`}
              >
                <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{scooterData.name}</h1>
            <div className="flex items-center text-sm text-gray-600 gap-4">
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                {scooterData.location}
              </div>
              <div className="flex items-center">
                <span className="flex items-center">
                  {"★".repeat(Math.floor(scooterData.rating))}
                  {"☆".repeat(5 - Math.floor(scooterData.rating))}
                </span>
                <span className="ml-1">({scooterData.reviews} reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-gray-700">{scooterData.description}</p>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold text-lg mb-4">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Model</p>
                <p className="font-medium">{scooterData.model}</p>
              </div>
              <div>
                <p className="text-gray-600">Type</p>
                <p className="font-medium">{scooterData.type}</p>
              </div>
              <div>
                <p className="text-gray-600">Battery Capacity</p>
                <p className="font-medium">{scooterData.batteryCapacity}</p>
              </div>
              <div>
                <p className="text-gray-600">Range</p>
                <p className="font-medium">{scooterData.range}</p>
              </div>
              <div>
                <p className="text-gray-600">Max Speed</p>
                <p className="font-medium">{scooterData.maxSpeed}</p>
              </div>
              <div>
                <p className="text-gray-600">Charging Time</p>
                <p className="font-medium">{scooterData.chargingTime}</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Features</h2>
            <div className="flex flex-wrap gap-2">
              {scooterData.features.map((feature, idx) => (
                <span 
                  key={idx} 
                  className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Available Colors */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Available Colors</h2>
            <div className="flex gap-3">
              {scooterData.availableColors.map((color, idx) => (
                <div key={idx} className="flex items-center">
                  <div className={`w-4 h-4 rounded-full ${
                    color.toLowerCase().includes("green") ? "bg-green-500" : 
                    color.toLowerCase().includes("grey") ? "bg-gray-500" : 
                    color.toLowerCase().includes("white") ? "bg-gray-100 border border-gray-300" : "bg-gray-500"
                  } mr-2`}></div>
                  {color}
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="bg-green-50 p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-gray-600">Rental Price</p>
                <p className="text-3xl font-bold text-green-700">{scooterData.rentalPrice}<span className="text-lg font-normal">/day</span></p>
              </div>
              <div className="flex items-center text-green-600">
                <Battery size={20} className="mr-1" />
                <span className="font-medium">Charging Included</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button className="w-full h-12 text-lg bg-green-600 hover:bg-green-700">
                <Calendar className="mr-2" size={20} />
                Book Now
              </Button>
              <Button variant="outline" className="w-full h-12 text-lg border-green-600 text-green-700 hover:bg-green-50">
                <Zap className="mr-2" size={20} />
                Request Test Ride
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}