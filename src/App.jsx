import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Travel from './components/Travel'
import Service from './components/Service'
import Influencers from './components/Influencers'
import FAQ from './components/FAQ'

const App = () => {
  return (
    <div className='bg-slate-950'>
    <Navbar/>
    <Hero/>
   <Services/>
    <Travel/>
    <Service/> 
    <Influencers/>
    <FAQ/>
    </div>
  )
}

export default App