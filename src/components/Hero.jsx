import React from 'react'

const Hero = () => {
  return (
        <div className='mx-auto max-w-[1400px] bg-slate-950 px-4 xl:px-40'>

        <div className='flex flex-col lg:flex-row space-y-7'>
            {/* left */}
            <div className='flex flex-col justify-between space-y-4'>
                 <div>
                 <div className='flex'>
                    <p className='bg-white font-bold text-black px-4 flex items-center m-1 rounded-xl text-6xl'>One</p>
                    <p className='bg-white font-bold text-black px-4 py-2 m-1 rounded-xl text-6xl'>Stop</p>
                 </div>
                 <div className=''>
                    <p className='bg-white font-bold text-black m-1 rounded-xl text-5xl w-fit px-4 py-2'>Marketplace</p>
                 </div>
                 <div className=' flex'>
                 <p className='bg-white font-bold text-black px-4 py-2 m-1 rounded-xl text-5xl'>For</p>
                    <p className='bg-[#00df9a] font-bold text-black px-4 py-2 m-1 rounded-xl text-5xl'>Influencers</p>
                 </div>
                 </div>

                 <div className='text-[#FFFFFF] font-medium text-3xl w-[90%]'>
                    <p className='text-5xl'>"Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content - All in one Hub</p>
                 </div>
                 <div className='flex space-x-2'>
                    <button className='bg-[#00df9a] p-3 flex items-center rounded-2xl text-xl font-bold'> Demo Store</button>
                    <button className='bg-slate-950 border-solid border-2 border-indigo-200 text-indigo-600  p-3 flex items-center rounded-2xl text-xl font-bold'>Join Waitlist</button>
                 </div>

            </div>
            


            {/* right */}
            <div>
                <div>
                    <img src="image/hero.png" alt="" />
                </div>
            </div>

        </div>


    </div>
  )
}

export default Hero