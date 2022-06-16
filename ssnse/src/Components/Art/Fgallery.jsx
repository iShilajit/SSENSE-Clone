import React from 'react'
import { FrontArtisa } from './FrontArtisa';

export const Fgallery = () => {
    const data = [
        {
          id: 1,
          img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1653505928/yh82ipgrnwvy1ge03nle.jpg",
          heading: "GOING GREENER",
          category: "Market",
          text: "Sustainably-minded finds from 1986, Vitesy, and Everist",
        },
        


        {
          id: 2,
          img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1652727887/lqerf3zzhyfeaorbzfkp.jpg",
          heading: "EL MUNDO ENTERO: J BALVIN PREPARES",
          category: "Music",
          text: "A global superstar of the highest magnitude, J Balvin dominates the charts and sells out arenas because",
        },
        


      ];
  return (
    <div>
 <div className="large-articles1">
        {data.map((d) => (
          <FrontArtisa key={d.id}
            img={d.img}
            heading={d.heading}
            category={d.category}
            text={d.text}
          />
        ))}
      </div>

    </div>
  )
}
