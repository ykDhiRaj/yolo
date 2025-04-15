"use client"
import * as React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { ImageSwiper } from "@/components/ui/image-swiper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menus = [
  { id: 1, title: "Home", url: "/", dropdown: false },
  {
    id: 2,
    title: "Rentals",
    url: "/rentals/bikes",
    dropdown: true,
    items: [
      { id: 21, title: "Bikes", url: "/rentals/bikes" },
      { id: 22, title: "Scooters", url: "/rentals/scooters" },
    ],
  },
  { id: 3, title: "My Bookings", url: "/my-bookings", dropdown: false },
  { id: 4, title: "About Us", url: "/#about", dropdown: false },
  { id: 5, title: "Contact", url: "/#contact", dropdown: false },
];

const images = [
  "https://ui.lukacho.com/_next/static/media/1.3a5bf91d.webp",
  "https://ui.lukacho.com/_next/static/media/2.6a8dd51d.webp",
  "https://ui.lukacho.com/_next/static/media/3.d95288b3.webp",
  "https://ui.lukacho.com/_next/static/media/4.0de1e023.webp",
];

const touristStates = [
  "Goa",
  "Kerala",
  "Rajasthan",
  "Himachal Pradesh",
  "Uttarakhand",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Sikkim",
  "West Bengal",
  "Jammu and Kashmir",
  "Andaman and Nicobar Islands",
];

export default function bikes() {
  const [selectedState, setSelectedState] = React.useState(touristStates[0]);

  const handleClick = (id:string) => {
    // Redirect to the bike details page with the selected bike ID
    window.location.href = `/rentals/bikes/${id}`;  
  }

  return (
    <>
      <div>
        {/* Navbar */}
        <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
          <div className="flex items-center justify-between px-5 py-2">
            <h1 className="text-xl font-bold">YOLO</h1>
            <Navbar list={menus} />
            <Button className="cursor-pointer">Sign in</Button>
          </div>
        </div>

        {/* Dropdown */}
        <div className="mt-24 px-5 flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">State: {selectedState}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              <DropdownMenuLabel>Select State</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={selectedState}
                onValueChange={setSelectedState}
              >
                {touristStates.map((state) => (
                  <DropdownMenuRadioItem key={state} value={state}>
                    {state}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Bike Cards */}
        <div className="mt-10 px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="w-full max-w-[300px]" onClick={()=> handleClick(i.toString())}>
                <CardContent className="p-0">
                  <ImageSwiper images={images} />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {selectedState}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    5000 Kilometers away
                  </p>
                  <p className="mt-1">
                    <span className="font-semibold">₹200</span> per day
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
