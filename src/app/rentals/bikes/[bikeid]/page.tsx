"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, Info, Shield, MapPin } from "lucide-react";

// Define TypeScript interfaces for our data
interface BikeData {
  id: string;
  name: string;
  model: string;
  type: string;
  fuelType: string;
  engineCapacity: string;
  mileage: string;
  maxSpeed: string;
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
  bikeid: string;
}

export default function BikePage() {
  const params = useParams<Params>();
  const bikeid = params.bikeid;
  const router = useRouter();
  const [bikeData, setBikeData] = useState<BikeData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fake data for now – replace with actual fetch from Supabase or backend
  const dummyBike: BikeData = {
    id: bikeid,
    name: "Yamaha FZ-X",
    model: "2023",
    type: "Motorbike",
    fuelType: "Petrol",
    engineCapacity: "149cc",
    mileage: "45 km/l",
    maxSpeed: "115 km/h",
    description: "The Yamaha FZ-X is a neo-retro motorcycle with modern features. Perfect for city rides and weekend getaways with its comfortable riding position and reliable performance.",
    location: "Sector 12, Noida",
    rentalPrice: "₹799",
    availableColors: ["Metallic Blue", "Matte Black", "Racing Red"],
    features: ["Digital Console", "ABS", "LED Headlamp", "USB Charging", "Bluetooth Connectivity"],
    images: [
      "https://i.imgur.com/TQIqsob.png",
      "https://i.imgur.com/3ROmJ0S.png", 
      "https://i.imgur.com/6fKCuVC.png",
      "https://i.imgur.com/Jjqe7St.png"
    ],
    rating: 4.8,
    reviews: 36,
  };

  useEffect(() => {
    // Simulate loading data from API
    const fetchData = async () => {
      setIsLoading(true);
      // In real app, fetch from API based on bikeid
      // const response = await fetch(`/api/bikes/${bikeid}`);
      // const data = await response.json();
      
      // Simulate network delay
      setTimeout(() => {
        setBikeData(dummyBike);
        setIsLoading(false);
      }, 800);
    };

    fetchData();
  }, [bikeid]);

  const nextImage = () => {
    if (!bikeData) return;
    
    setCurrentImageIndex((prevIndex) => 
      prevIndex === bikeData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    if (!bikeData) return;
    
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? bikeData.images.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!bikeData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Bike not found</h2>
        <p className="mb-6">The bike you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => router.push('/bikes')}>
          Browse All Bikes
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
              src={bikeData.images[currentImageIndex]} 
              alt={bikeData.name} 
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
              {bikeData.images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-blue-500' : 'bg-white/60'}`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Thumbnail strip */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {bikeData.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`relative w-20 h-16 rounded-md overflow-hidden flex-shrink-0 ${
                  idx === currentImageIndex ? 'ring-2 ring-blue-500' : ''
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
            <h1 className="text-3xl font-bold mb-2">{bikeData.name}</h1>
            <div className="flex items-center text-sm text-gray-600 gap-4">
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                {bikeData.location}
              </div>
              <div className="flex items-center">
                <span className="flex items-center">
                  {"★".repeat(Math.floor(bikeData.rating))}
                  {"☆".repeat(5 - Math.floor(bikeData.rating))}
                </span>
                <span className="ml-1">({bikeData.reviews} reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-gray-700">{bikeData.description}</p>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold text-lg mb-4">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Model</p>
                <p className="font-medium">{bikeData.model}</p>
              </div>
              <div>
                <p className="text-gray-600">Type</p>
                <p className="font-medium">{bikeData.type}</p>
              </div>
              <div>
                <p className="text-gray-600">Fuel Type</p>
                <p className="font-medium">{bikeData.fuelType}</p>
              </div>
              <div>
                <p className="text-gray-600">Engine</p>
                <p className="font-medium">{bikeData.engineCapacity}</p>
              </div>
              <div>
                <p className="text-gray-600">Mileage</p>
                <p className="font-medium">{bikeData.mileage}</p>
              </div>
              <div>
                <p className="text-gray-600">Max Speed</p>
                <p className="font-medium">{bikeData.maxSpeed}</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Features</h2>
            <div className="flex flex-wrap gap-2">
              {bikeData.features.map((feature, idx) => (
                <span 
                  key={idx} 
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-gray-600">Rental Price</p>
                <p className="text-3xl font-bold text-blue-700">{bikeData.rentalPrice}<span className="text-lg font-normal">/day</span></p>
              </div>
              <div className="flex items-center text-green-600">
                <Shield size={20} className="mr-1" />
                <span className="font-medium">Insurance Included</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700">
                <Calendar className="mr-2" size={20} />
                Book Now
              </Button>
              <Button variant="outline" className="w-full h-12 text-lg">
                <Info className="mr-2" size={20} />
                Request More Info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}