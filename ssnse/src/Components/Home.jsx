import React from 'react'
import { Artisa } from './Art/Artisa'
import { Frthimg } from './Parts/Frthimg'
import { Fstimg } from './Parts/Fstimg'
import { Fthimg } from './Parts/Fthimg'
import { Slpoe } from './Parts/Slpoe'
import { Sndimg } from './Parts/Sndimg'
import { Trdimg } from './Parts/Trdimg'

export const Home = () => {
  return (
    <div>
      <div class=" ">
        <img class="object-none h-48 w-100 ml-500 " src='https://res.cloudinary.com/ssenseweb/image/upload/w_1024,q_90,f_auto,dpr_auto/v1655118789/hwjzwhd1vextzh8jttgp.gif' />
        <Fstimg />
        <Sndimg />
        <Trdimg />
        <Slpoe />
        <Artisa />
        <Frthimg />
        <div className='items-center'>
          <h1 className='text-9xl text-center'>
            PERSONAL SPACE WITH JOSH ITIOLA  </h1>
          <h2 className='text-6xl text-center mb-20'>
            Talking Prized Possessions with the Multi-Talented Engineer Turned Vitsœ Planner
          </h2>
          <button class=" -mt-10
                 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2
                 bg-transparent hover:bg-gray-500 text-gray-700  
                hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            VIEW EDITORIAL
          </button>
        </div>

        <Fthimg/>
      </div>


    </div>
  )
}
