"use client"
import Navbar from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Filter, Search, XCircle } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Define the menu type
interface MenuItem {
  id: number;
  title: string;
  url: string;
  dropdown: boolean;
  items?: MenuItem[];
}

// Define the booking type
interface Booking {
  id: string;
  vehicleType: "Bike" | "Scooter";
  model: string;
  dateFrom: string;
  dateTo: string;
  location: string;
  status: "active" | "upcoming" | "completed" | "cancelled";
  price: number;
  image: string;
}

// Define status type for type safety
type BookingStatus = "all" | "active" | "upcoming" | "completed" | "cancelled";

const menus: MenuItem[] = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    dropdown: false,
  },
  {
    id: 2,
    title: 'Rentals',
    url: '/',
    dropdown: true,
    items: [
      {
        id: 21,
        title: 'Bikes',
        url: '/rentals/bikes',
        dropdown: false,
      },
      {
        id: 22,
        title: 'Scooters',
        url: '/rentals/scooters',
        dropdown: false,
      },
    ],
  },
  {
    id: 3,
    title: 'My Bookings',
    url: '/my-bookings',
    dropdown: false,
  },
  {
    id: 4,
    title: 'About Us',
    url: '/#about',
    dropdown: false,
  },
  {
    id: 5,
    title: 'Contact',
    url: '/#contact',
    dropdown: false,
  },
];

// Sample booking data
const sampleBookings: Booking[] = [
  {
    id: "BK-2023-4421",
    vehicleType: "Bike",
    model: "Mountain Cruiser X1",
    dateFrom: "2025-04-15T10:00:00",
    dateTo: "2025-04-17T18:00:00",
    location: "Downtown Station",
    status: "active",
    price: 45.99,
    image: "/api/placeholder/120/80"
  },
  {
    id: "BK-2023-4455",
    vehicleType: "Scooter",
    model: "Urban Glider S2",
    dateFrom: "2025-04-20T09:00:00",
    dateTo: "2025-04-20T19:00:00",
    location: "Beach Front Rental Hub",
    status: "upcoming",
    price: 29.99,
    image: "/api/placeholder/120/80"
  },
  {
    id: "BK-2023-4390",
    vehicleType: "Bike",
    model: "City Explorer E-Bike",
    dateFrom: "2025-04-05T14:00:00",
    dateTo: "2025-04-06T14:00:00",
    location: "Central Park Station",
    status: "completed",
    price: 55.50,
    image: "/api/placeholder/120/80"
  },
  {
    id: "BK-2023-4322",
    vehicleType: "Scooter",
    model: "Speed Demon Pro",
    dateFrom: "2025-03-28T11:00:00",
    dateTo: "2025-03-28T17:00:00",
    location: "Airport Terminal Hub",
    status: "cancelled",
    price: 32.50,
    image: "/api/placeholder/120/80"
  }
];

export default function MyBookings() {

   const router = useRouter();

   const handleClick = ()=>{
    const randomPath = Math.random() < 0.5 ? '/rentals/bikes' : '/rentals/scooters';
    router.push(randomPath);
   }
   
  const [bookings, setBookings] = useState<Booking[]>(sampleBookings);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<BookingStatus>("all");

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.model.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        booking.location.toLowerCase().includes(searchTerm.toLowerCase());
                        
    const matchesFilter = filterStatus === "all" || booking.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  // Function to format date in a readable format
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Function to format time
  const formatTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  // Cancel booking function
  const cancelBooking = (id: string): void => {
    setBookings(bookings.map(booking => 
      booking.id === id ? {...booking, status: 'cancelled' as const} : booking
    ));
  };

  // Status badge styles
  const getStatusBadgeStyle = (status: Booking['status']): string => {
    switch(status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="flex items-center justify-between px-5 py-2">
          <h1 className="text-2xl font-bold">YOLO</h1>
          <Navbar list={menus} />
          <Button className="cursor-pointer">Sign in</Button>
        </div>
      </div>
      
      <div className="pt-20 px-5 lg:px-10 pb-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by vehicle, booking ID or location"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative w-full md:w-48">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as BookingStatus)}
              >
                <option value="all">All Bookings</option>
                <option value="active">Active</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
          
          {/* Bookings List */}
          {filteredBookings.length > 0 ? (
            <div className="space-y-4">
              {filteredBookings.map(booking => (
                <div key={booking.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Container */}
                    <div className="w-full md:w-32 lg:w-40 h-40 md:h-auto bg-gray-200 flex-shrink-0">
                      <img 
                        src={booking.image} 
                        alt={booking.model} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content Container */}
                    <div className="flex-grow p-4">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold">{booking.model}</h3>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeStyle(booking.status)}`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">Booking ID: {booking.id}</p>
                        </div>
                        <div className="mt-2 md:mt-0 text-lg font-semibold text-blue-600">
                          ${booking.price.toFixed(2)}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 mb-4">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>From: {formatDate(booking.dateFrom)}, {formatTime(booking.dateFrom)}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>To: {formatDate(booking.dateTo)}, {formatTime(booking.dateTo)}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{booking.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{booking.vehicleType}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {(booking.status === "upcoming" || booking.status === "active") && (
                          <Button 
                            variant="destructive"
                            size="sm"
                            className="flex items-center gap-1"
                            onClick={() => cancelBooking(booking.id)}
                          >
                            <XCircle className="h-4 w-4" />
                            Cancel Booking
                          </Button>
                        )}
                        <Button 
                          variant="outline"
                          size="sm"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No bookings found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm || filterStatus !== "all" ? 
                  "Try adjusting your search or filter" : 
                  "You don't have any bookings yet"}
              </p>
              <div className="mt-6">
                <Button onClick={handleClick}>Explore Rentals</Button>
              </div>
            </div>
          )}
          
          {/* Empty State */}
          {bookings.length > 0 && filteredBookings.length === 0 && (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No results found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <div className="mt-6">
                <Button variant="outline" onClick={() => {setSearchTerm(""); setFilterStatus("all");}}>
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}