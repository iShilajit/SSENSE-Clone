import React from 'react'
import { BackArtisa } from './BackArtisa';

export const Bgallery = () => {
    const data = [
        {
          id: 1,
          img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1648043578/rx9qrqkbfbni3ajifbqh.jpg",
          heading:
            "Danger By Definition: LỰU ĐẠN Is Hung La’s New Look",
          category: "Fashion",
        },
        {
          id: 2,
          img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1502805954/e7j1oddik2a43lz213yf.jpg",
          heading: "Sustainably-minded finds from 1986, Vitesy, and Everist",
          category: "Fashion",
        },
        {
          id: 3,
          img: "https://res.cloudinary.com/ssenseweb/image/upload/w_0.1,q_40,f_auto,dpr_auto/v1638307317/td5r8hhiwlfnktzy2y9w.jpg",
          heading: "Into the Deep Blue with BOTTER",
          category: "Fashion",
        },
        {
          id: 4,
          img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1624025148/bv2hpn7sp2y0eit9aaus.jpg",
          heading: "Marc by Marc’s Biggest Fans",
          category: "Fashion",
        },
      ];
  return (
    <div>

<hr />
      {data.map((d) => (
        
          <BackArtisa key={d.id} img={d.img} heading={d.heading} category={d.category} />
       
      ))}
    </div>
  )
}
