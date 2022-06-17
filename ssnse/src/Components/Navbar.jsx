import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
        <div className="relative flex  lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-12 bg-gray-100" >
          <p className="bg-gray-100 h-10 flex items-center justify-center text-sm font-medium text-gray-500 px-4 sm:px-12 lg:px-12">
          Further Discounts: Shop Sale Up to 60% Off
          </p>
        </div>
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link to='/Men' class="mr-5 hover:text-gray-900">MENSWEAR</Link>
      <Link to='/Women' class="mr-5 hover:text-gray-900">WOMENWEAR</Link>
      <Link to='/Everything' class="mr-5 hover:text-gray-900">EVERYTHING ELSE</Link>
      <Link to='' class="hover:text-gray-900">SEARCH</Link>
    </nav>
    <Link to='/' class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span> */}
     
            <img className='w-2/4 ml-20' src="https://res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg" />
        
    </Link>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button> */}
       <nav class="flex  flex-wrap items-center text-base md:ml-auto">
       <Link to='' class="mr-5 hover:text-gray-900">ENGLISH</Link>
       <Link to='/login' class="mr-5 hover:text-gray-900">LOGIN</Link>
       <Link to='' class="mr-5 hover:text-gray-900">WISHLIST</Link>
       <Link to='' class="hover:text-gray-900">SHOPPING BAG</Link>
    </nav>
    </div>
  </div>
</header>
    </div>
  )
}
