import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa'; // User icon from react-icons


const Navbar = () => {
    const [nav, setNav]  = useState(false)
    const [menuOpen, setMenuOpen] = useState(false); // Profile dropdown state

    const handleNav = ()=>{
        setNav(!nav)
    }
  return (
    <div className='mx-auto max-w-[1400px] bg-slate-950 flex justify-between items-center h-24 px-4 xl:px-40 text-white'>

    <h1 className=' text-3xl font-bold text-[#00df9a]'>VYB-store</h1>
    <div className="flex justify-center items-center">
      <div className="relative">
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 text-lg">
          🔍
        </button>
        <input
          type='text'
          placeholder="Search Creator/product"
          className="text-black border-none w-44 lg:w-64 px-4 py-2 pr-10 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
{/* 
    Primary#00DC82 Primary Text#000000
Secondary#003C3C Secondary Text#838383
Gradient 1#FF5D5D Other Text & CTA#FFFFFF
Gradient 2#4794FF */}

    <ul className='hidden md:flex'>
      <li className='p-4 xl:text-2xl lg:font-semibold'>Fav Creators</li>
      <li className='p-4 xl:text-2xl lg:font-semibold'>Merchandise</li>
      <li className='p-4 xl:text-2xl lg:font-semibold'>Brand</li>
      <li className='p-4 xl:text-2xl lg:font-semibold'>Digital</li>
      <li className="relative p-4 xl:text-2xl lg:font-semibold">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-2"
          >
            <FaUser className="text-xl" />
            <span className="hidden md:inline">Profile</span>
          </button>

          {/* Profile Dropdown */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-700 text-white rounded-md shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-600"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-600"
              >
                My Store
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-600"
              >
                Logout
              </a>
            </div>
          )}
        </li>    </ul>
    <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
    </div>
  
    <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>VYB-store</h1>
        <li className='p-4 border-b border-gray-600'>Fav Creators</li>
        <li className='p-4 border-b border-gray-600'>Merchandise</li>
        <li className='p-4 border-b border-gray-600'>Brand</li>
        <li className='p-4 border-b border-gray-600'>Digital</li>
    </ul>
    </div>

  )
}

export default Navbar