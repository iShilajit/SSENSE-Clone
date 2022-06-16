import React from 'react'
import styled from "styled-components";
import { Slopepart } from './Slopepart';
const Wrapper  = styled.div`
display:flex;
flex-direction:column;
flex:1;
margin: 0.5% 2.5%;

`

const MainDiv = styled.div`
display:flex

`
export const Slpoe = () => { 
    const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1649085943/qgmitaaam8j3zxnvejyd.jpg",
      heading:"BLESSED IS THE BLOWOUT",
      category: "Culture",
      
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1644252200/buf3t8mb8ntcpq1wr9sv.jpg",
      heading: "MADE IN VAIN:A TAXONOMY OF EYE-OPENING BEAUTY...",
      category: "Culture",
    
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1620396470/bs5cplhqqarlqwkgn9zw.jpg",
      heading: "YOUR NEW PLANT-BASED DIET",
      category: "Fashion",
      
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1611000375/rp6nq62qdumahw1dqagx.jpg",
      heading: "INTO THE GLOSSARY",
      category: "Fashion",
      
    },
  ];
  return (
    <MainDiv >
      <hr />
      
      {data.map((d) => (
       <Wrapper key={d.id}>
          <div style={{borderTop:"1px solid grey"}}> </div> 
          <Slopepart  img={d.img} heading={d.heading} category={d.category} />
          <div style={{borderTop:"1px solid grey"}}> </div> 
          </Wrapper>
      ))}
      
    </MainDiv>
  )
}
