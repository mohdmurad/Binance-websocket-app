import React from 'react';
import { FaPlane } from "react-icons/fa";


const Travel = () => {
  const itineraries = [
    {
      title: 'Delhi Itinerary',
      location: 'Delhi',
      profileName: 'John Doe',
      profileImage: 'image/pf.png',
      cardImage: 'image/travel1.png',
    },
    {
      title: 'Paris Adventure',
      location: 'Paris',
      profileName: 'Jane Smith',
      profileImage: 'image/pf.png',
      cardImage: 'image/travel2.png',
    },
    {
      title: 'Tokyo Discovery',
      location: 'Tokyo',
      profileName: 'Yuki Tanaka',
      profileImage: 'image/pf.png',
      cardImage: 'image/travel1.png',
    },
  ];

  return (
    <div className='bg-slate-950  max-w-[1400px] mx-auto px-4 xl:px-40'>

    <div className="bg-black flex flex-col items-center">
      {/* Top Section */}
      <div className="relative w-full">
        <img
          src="image/frame1.png"
          alt="Travel"
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 bg-black bg-opacity-40">
          <h1 className="text-white text-5xl md:text-9xl font-extrabold mb-6">TRAVEL</h1>
          <p className="text-white text-lg md:text-4xl font-semibold max-w-[800px]">
            Turn your travel experience into an itinerary travel package with VYB Store 
            and share it with your true followers.
          </p>
        </div>
      </div>




      {/* Bottom Section */}
      <div className="w-full bg-black py-8 px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-8">
          Explore Our Curated Travel Itineraries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {itineraries.map((item, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[500px] bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Profile and Text Section */}
              <div className="absolute top-0 left-0 w-full z-10 p-4">
                <div className="flex items-center mb-2">
                  <img
                    src={item.profileImage}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <p className="text-white text-sm font-bold ml-2">{item.profileName}</p>
                </div>
                <div>
                  <p className="text-white text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-300 text-sm">{item.location}</p>
                </div>
              </div>
              {/* Card Image */}
              <img
                src={item.cardImage}
                alt="title"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>




      



    </div>
    </div>
  );
};

export default Travel; 