import React from 'react'
import { Label } from '../Parts/Label';
export const FrontArtisa = (props) => {
  
  return (
    <div>
  <div style={{display:"flex", border:"1px solid white"}}>
      <div style={{flex:1}}>
        <img className='mt-5 w-100 h-100' src={props.img} alt="" />
      </div>
      <div style={{ flex: 1, padding:"2%" , textAlign:"left",fontSize:"30px"}}>
              <h1 className='ml-5'>{props.heading}</h1>
              <Label className='ml-5'>{props.category}</Label >
        <p  className='ml-5 mt-10' >{props.text}</p>
        
      </div>
    </div>

    </div>
  )
}
