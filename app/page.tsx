'use client';
import React, { useRef } from 'react'
import Product from './product/page'
import Solutions from './solution/page'
import About from './about/page'
import Hero from './components/Hero'
import BackToTopButton from './components/BackToTop'
import References from './references/page';

const App = (): JSX.Element => {
  return (
    <div className='space-y-20' >
      <Hero />
      <About />
      <Product />
      <Solutions />
      <References/>
      <BackToTopButton />
    </div>
  )
}

export default App