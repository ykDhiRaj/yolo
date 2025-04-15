import React from 'react'
import { Testimonials } from '@/components/ui/testimonials'

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'YOLO Bike Rentals is a total game-changer! I was able to rent a scooter within minutes while traveling — super smooth experience.',
    name: 'Alice Johnson',
    username: '@alicejohnson',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Listing my own bike on YOLO was surprisingly easy — now I earn passive income whenever I’m not using it!',
    name: 'David Smith',
    username: '@davidsmith',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/kaDy9hV.jpeg',
    text: 'I love how flexible YOLO is. Whether I need a quick ride or want to explore the city, there’s always a ride nearby.',
    name: 'Emma Brown',
    username: '@emmabrown',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/cRwFxtE.png',
    text: 'The UI is super intuitive. Renting or listing a bike takes just a few taps. Honestly the best mobility app I’ve used.',
    name: 'James Wilson',
    username: '@jameswilson',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/TQIqsob.png',
    text: 'YOLO has completely changed the way I commute in the city. Affordable, convenient, and eco-friendly!',
    name: 'Sophia Lee',
    username: '@sophialee',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/3ROmJ0S.png',
    text: 'Using YOLO helped us reduce transport costs for our team during events — it’s seriously underrated!',
    name: 'Michael Davis',
    username: '@michaeldavis',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/6fKCuVC.png',
    text: 'I love that the rides are available 24/7. Great range of bikes and scooters, and everything works flawlessly.',
    name: 'Emily Chen',
    username: '@emilychen',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/Jjqe7St.png',
    text: 'The ability to rent and list vehicles in one app is genius. YOLO is perfect for both riders and owners.',
    name: 'Robert Lee',
    username: '@robertlee',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/bG88vHI.png',
    text: 'Setup was quick, and the app is really well-designed. YOLO makes micro-mobility fun and stress-free.',
    name: 'Sarah Taylor',
    username: '@sarahtaylor',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/tjmS77j.png',
    text: 'I’ve used other rental apps, but YOLO stands out for its community-driven model. It feels local and smart.',
    name: 'Kevin White',
    username: '@kevinwhite',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/yTsomza.png',
    text: 'YOLO is perfect for college students like me. Quick, affordable rides and a great way to earn extra cash!',
    name: 'Rachel Patel',
    username: '@rachelpatel',
    social: 'https://i.imgur.com/VRtqhGC.png'
  },
  {
    image: 'https://i.imgur.com/pnsLqpq.png',
    text: 'What I love about YOLO is how it supports sustainable transport. And the rides are smooth and fun!',
    name: 'Brian Kim',
    username: '@briankim',
    social: 'https://i.imgur.com/VRtqhGC.png'
  }
];


const Page2 = () => {
  return (
    <>
    <div className='w-full h-screen'>
      <Testimonials testimonials={testimonials}/>
    </div>
    </>
  )
}

export default Page2