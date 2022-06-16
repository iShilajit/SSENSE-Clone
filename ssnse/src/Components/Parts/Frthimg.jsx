import React from 'react'

export const Frthimg = () => {
    const callouts = [
        {
          name: 'ADIDAS X HUMANRACE BY PHARELL WILLIAMS SHOP MENSWEAR',
          description: 'Featured ',
          imageSrc: 'https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1655125207/gmb2lkhocedh2oqnm6x8.jpg',
          imageAlt: 'Featured',
          btn_name:'SHOP MENSWEAR',
          href: '#',
        },
        
    

    
        {
          name: 'SC103',
          description: 'Featured',
          imageSrc: 'https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1655125883/wwec19lmzqaoexb08kb8.jpg',
          imageAlt: 'Featured',
          btn_name:'SHOP WOMENSWEAR',
          href: '#',
        },
        
 

        
      ]
  return (
    <div>
<div className="bg-white-100 -mt-40 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
         {/* <div className='mt-6 text-center space-y-12 h-50 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6'>
         <h1 className="text-5xl font-bold text-gray-900 ">SHOP MENSWEAR</h1>
          <h1 className="text-5xl font-bold text-gray-900">SHOP WOMENSWEAR</h1>
         </div> */}
          <div className="mt-6 space-y-12 h-50 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-100 bg-white rounded-lg ">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                <button class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold
                hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                {callout.btn_name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
