import React from 'react'

export const Fthimg = () => {
    const callouts = [
        {
          name: 'RECENTHOME SWEET DREW HOUSE',
          description: 'Fashion | May 12',
          imageSrc: 'https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1651600166/ovnakrvqeocifdzyzr5i.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '#',
        },
        

    
        {
          name: ' RECENTFRESH FACE FORWARD!',
          description: 'Market | May 10',
          imageSrc: 'https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1651863209/edmf59b79yobdsulmqeu.jpg',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
        {
            name: ' RECENTLA STORY: LEAVING RECORDS AND MUSIC FOR LIFE SUPPORT',
            description: '  Fashion | May 17',
            imageSrc: 'https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1651505214/pavhpnylbxkvi2hgtr9z.jpg',
            imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
            href: '#',
          },
    
    
          
        
        
      ]
  return (
    <div>
    <div className="bg-white-100 -mt-32 ">
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
