import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productdetails } from "../../Actions/Product.action";
import { useHistory } from "react-router-dom";
import { CartDet } from "../../Actions/Cart.action";
import { BsDash } from 'react-icons/bs';
import {BsPlus  } from 'react-icons/bs';
import "./Productdetails.css";
export default function Productdetails({ match }) {
	const [qty,setQty]=useState(1)
  const history = useHistory();
  let pdetails = match.params.pname;
  console.log(pdetails);
  const DispatchMethod = useDispatch();
  const ProductCategory3 = useSelector((state) => state.Productdata);
  console.log(ProductCategory3);
  const product = ProductCategory3.Product_details;
  useEffect(() => {
    DispatchMethod(productdetails(pdetails));
  }, [DispatchMethod]);

  // function AddToCart(ProductDet) {
  //   DispatchMethod(CartDet(ProductDet));
  //   history.push("/Cart");
  // }
  const dec=()=>{
	  if(qty>1){
		setQty(qty-1)
	  }
	
  }
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={product.image} />
                  </div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{product.title}</h3>
                <div className="rating">
                  <span className="review-no">{product.category}</span>
                </div>
                <p className="product-description">{product.description}</p>
				<div className='details__info'>
					<div className='details__incdec'>
					<span className='dec' onClick={dec}><BsDash/></span>
					<span className='qty'>{qty}</span>
					<span className='inc'onClick={()=>setQty(qty+1)}><BsPlus/></span>
					</div>
				</div>
                <h4 className="price">
                  current price: <span>${product.price}</span>
                </h4>

                <div className="action">
                  <button
                    className="add-to-cart btn btn-default"
                    onClick={() =>DispatchMethod({type:'ADD_TO_CART',payload:{product,qty}})}
                    type="button"
                  >
                    add to cart
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
