import React from 'react'
import "./Description.css"
export const Description = () => {
    let pro = JSON.parse(localStorage.getItem("productdes"))||[];
    console.log(pro);
    const addToCart = (e) => {
        let cartItems = JSON.parse(localStorage.getItem("cartProducts")) || [];
        let flag = false;
        for (let i = 0; i < cartItems.length; i++) {
          if (cartItems[i].id == e.id) {
            alert("err");
            // notify2();
            flag = true;
          }
        }
        if (flag == false) {
          e.quantity = 1;
          cartItems.push(e);
          localStorage.setItem("cartProducts", JSON.stringify(cartItems));
            alert("item Addes")
        //   notify();
        }
        // setCartLength(cartItems.length);
      };
  return (
    <div>

<div className='Main-div'>
     <div>
    
{/*                     
                                    <div key={pro.id}  >
                                       
                                        <div  onClick={()=>handleAdd(pro)}>
                                            <img src={pro.itemImg} alt="" />
                                            <p>{pro.title}</p>
                                           
                                            <p>{pro.price}</p>
                                        </div>
                                        
                                       
                                       
                                    </div> */}
                        
                    
     </div>
     <div className="mens-category1">

            <h5>{pro.title}</h5>
        
        {/* <div className="mens-category-list"> */}
            <p>{pro.desc}</p>
            <h6>Padded polyester satin jacket</h6>
            <p>. Half-Zip closure at stand collar</p>
            <p>. Welt pockets</p>
            <p>. Concealed zip vent at side-seam</p>
            <p>. Rubberizes logo patch at back collar</p>
            <p>. Single press-stud tab at back hem</p>
            <p>. Elasticized cuffs and hem</p>
            <p>. Fully lined</p>
            <br />
            <p> Please note that this item may not be shipped within the EU.</p>
            <br />
            <p> Supplier Color: OaK</p>
            <br />
            <p>Body: 100% polyester. Fill: 100%  polyester. Lining: 100% polyester.</p>
            <br />
            <p>221161M180032</p>
       
      </div> 
      <div className="mens-details-img">
            <img className='imdg' img src={pro.itemImg} alt="pro" />
      </div> 
      <div className="mens-category1">
   
            <h5>{pro.price} USD</h5>
            <select name="" id="size">
              <option value="">Select Size</option>
              <option value="XXS">XXS</option>
              <option value="XS">SX</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <div className='Add-to-cart-div'>
              <button className="add-to-cart" onClick={() => addToCart(pro)}>Add to Bag</button>
              <button className="add-to-wish">Add to Wishlist</button>
            </div>
            <div className='Add-to-cart-div2'>
              <p className='p1'>Fit Predictor</p>
              <p className='p2'> Calculate your size</p>
            </div>
            <p className='p3'>Model is 6ft 1" and wear size L. SIZE GUIDE</p>
            <p className='p4'>India : Free shipping on orders over $500 USD</p>
           
           
        
       
      </div> 

</div>
    </div>
  )
}
