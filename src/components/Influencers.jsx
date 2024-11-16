import React from "react";

const influencers = [
  {
    name: "John Doe",
    image: "image/inf1.png",
  },
  {
    name: "Jane Smith",
    image: "image/inf2.png",
  },
  {
    name: "Michael Johnson",
    image: "image/inf3.png",
  },
  {
    name: "Emily Davis",
    image: "image/inf3.png",
  },
];

const Influencers = () => {
  return (
    <div className='mx-auto max-w-[1400px] bg-slate-950 px-4 xl:px-40'>


    <div className="py-10">
      <h2 className="text-center text-[#00df9a] text-4xl font-bold mb-8">Our Influencers</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {influencers.map((influencer, index) => (
          <div
            key={index}
            className="relative group w-40 h-40 rounded-full overflow-hidden shadow-lg"
          >
            <img
              src={influencer.image}
              alt={influencer.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-semibold text-center">
                {influencer.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Influencers;
