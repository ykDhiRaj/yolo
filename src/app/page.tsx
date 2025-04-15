import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page4 from "@/components/Page4";
import Page5 from "@/components/Page5";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";

const menus = [
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
      },
      {
        id: 22,
        title: 'Scooters',
        url: '/rentals/scooters',
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

export default function Home() {
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="flex items-center justify-between px-5 py-2">
          <h1 className="text-2xl font-bold">YOLO</h1>
          <Navbar list={menus} />
          <Button className="cursor-pointer">Sign in</Button>
        </div>
      </div>

      {/* Main Content with padding-top to prevent overlap with fixed navbar */}
      <Page1/>

      {/*Testimonials*/}
      <Page2/>
      
      {/* About us  */}
      <div id="about">
      <Page3/>
      </div>

      {/* Contact us  */}
      <div id="contact">
      <Page4/>
      </div>

      {/* Footer */}
      <Page5/>
    </>
  );
}