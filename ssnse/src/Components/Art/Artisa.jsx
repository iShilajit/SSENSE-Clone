import React from 'react'
import { Label } from '../Parts/Label'
import { Bgallery } from './Bgallery'
import { Fgallery } from './Fgallery'
import "./Artisa.css"
export const Artisa = () => {
  return (
    <div>
 <div>
      <div className="dense-container">
        <div className="large-articles">
          <Fgallery/>
        </div>
        <div className="medium-articles">
          <div>
            <img
              style={{ height: "120%", width:"100%"  }}
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1652146773/fibjel8rg0ovcc8srrs4.jpg"
              alt=""
            />
          </div>
          <div>
            <h3>
            ATTACHMENT THEORY: A STRONG CASE FOR SOFT COLLARS
            </h3>
          </div>
          <Label > FASHION | May 17</Label>
        </div>
        <div className="small-articles">
         <Bgallery/>
        </div>
      </div>
    </div>

    </div>
  )
}
