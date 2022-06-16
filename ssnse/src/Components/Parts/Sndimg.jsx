import React from 'react'
const callouts = [
    {
      name: 'RECENTSINÉAD O’DWYER ON WHY FASHION NEEDS LESS SEASONS AND MORE SIZES',
      description: 'Fashion Jun 8',
      imageSrc: 'https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1654699619/tlezzyygma9mz4xvzlda.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    

    {
      name: 'RECENTLIKE A PRAYER: SEARCHING FOR THE LIGHT IN 2022',
      description: 'Culture Jun 1',
      imageSrc: 'https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1651165235/eonq48udslvzzrwv3og9.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
        name: 'SECOND SKIN WITH KATHRYN BOWEN',
        description: '  Fashion May 31',
        imageSrc: 'https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1653679510/nokh1fxeed1rjquv1yyb.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
      },


      
    
    
  ]
export const Sndimg = () => {
  return (
    <div>
        <div className="bg-white-100 -mt-60 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
         {/* <div className='mt-6 text-center space-y-12 h-50 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6'>
         <h1 className="text-5xl font-bold text-gray-900 ">SHOP MENSWEAR</h1>
          <h1 className="text-5xl font-bold text-gray-900">SHOP WOMENSWEAR</h1>
         </div> */}
          <div className="mt-6 space-y-12 h-50 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </div>
   
  )
}
