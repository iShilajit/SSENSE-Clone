import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Bag = () => {
  let cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
  console.log(cartProducts);
  const navigate = useNavigate()
  const handlePay = ()=>{
    alert("Your Payment is successfully Done")
    navigate("/")
  }
  return (
    <div>
      {cartProducts.map((c)=>{
        return(
          <div key={c.id}>
            <h1>{c.title}</h1>
            <img src={c.itemImg} alt="pImg" /> 
            <h2>${c.price}</h2>
            <button onClick={handlePay}>Pay</button>
          </div>
        )
      })}
    </div>
  )
}

