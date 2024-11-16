import React from 'react'

const Service = () => {
  return (
    <div className='bg-slate-950  max-w-[1400px] mx-auto'>

        <div className='p-5 flex flex-col items-center lg:flex-row'>
            {/* left */}
            <div className='lg:w-1/3'>
                <h1 className='font-semibold text-4xl text-center text-[#00df9a]'>From Creation To Monitization: VYB Store Has It All</h1>
            </div>

            {/* right */}
            <div className='mt-0'>
            <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Top row with two cards */}
      <div className="flex space-x-8 mb-8">
        <div className="bg-black text-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-4 max-w-xs w-full">
          {/* Text Heading */}
          <h2 className="text-4xl font-semibold text-center">Trusted By Influencers</h2>
          <p className='font-semibold text-xl text-center'>A trusted platform for influencers to grow and earn</p>

          {/* Image */}
          <img
            src="image/d.png"
            alt="Image"
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
        
        <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 max-w-xs w-full">
          {/* Text Heading */}
          <h2 className="text-4xl font-semibold text-center">Secured Data</h2>
          <p className='font-semibold text-xl text-center'>Advance security measures to protect your valuable data</p>

          {/* Image */}
          <img
            src="image/a.png"
            alt="Image"
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Bottom row with two cards */}
      <div className="flex space-x-8">
        <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 max-w-xs w-full">
          {/* Text Heading */}
          <h2 className="text-4xl font-semibold text-center">Authentic Payment Partner</h2>
          <p className='font-semibold text-xl text-center'>Reliable fast and secure payments you can trust</p>

          {/* Image */}
          <img
            src="image/c.png"
            alt="Image"
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
        
        <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 max-w-xs w-full">
          {/* Text Heading */}
          <h2 className="text-4xl font-semibold text-center">Monetize Your Influence</h2>
          <p className='font-semibold text-xl text-center'>Seamlessly turn your influence info consistent revenue</p>

          {/* Image */}
          <img
            src="image/b.png"
            alt="Image"
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
            </div>



        </div>
    </div>
  )
}

export default Service