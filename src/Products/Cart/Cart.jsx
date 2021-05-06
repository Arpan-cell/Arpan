import React from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";
import './Cart.css'
const Cart = () => {
  const { products, totalqty, totalprice } = useSelector(
    (state) => state.cartData
  );
  const dispatchMethod = useDispatch();
  return (
    <div className="cart">
      <div className="container">
        <h3>Your cart</h3>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-9">
                <div className="cart__heading">
                  <div className="row">
                    <div className="col-md-2">Picture</div>
                    <div className="col-md-2">Name</div>
                    <div className="col-md-2">Price</div>
                    <div className="col-md-2">Inc/Dec</div>
                    <div className="col-md-2">Total Price</div>
                    <div className="col-md-2">Remove</div>
                  </div>
                </div>
                {products.map((product) => (
                  <div className="row verticalAlign" key={product.id}>
                    <div className="col-md-2">
                      <div className="cart__image">
                        <img src={product.image} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="cart__name">{product.title}</div>
                    </div>
                    <div className="col-md-2">
                      <div className="cart__price">
                        {currencyFormatter.format(product.price, {
                          code: "USD",
                        })}
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="details__info cart__incDec">
                        <div className="details__incDec">
                          --
                          <span className="quantity">{product.qty}</span>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="cart__total text-center">
                        {currencyFormatter.format(product.price * product.qty, {
                          code: "USD",
                        })}
                      </div>
                    </div>
                    <div className="col-md-2">
                      --
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-3 summary-col">
                <div className="summary">
                  <div className="summary__heading">Summary</div>
                  <div className="summary__details">
                    <div className="row mb-10">
                      <div className="col-6">Total Items:</div>
                      <div className="col-6">{totalqty}</div>
                    </div>
                    <div className="row mb-10">
                      <div className="col-6">Total Price</div>
                      <div className="col-6">
                        {currencyFormatter.format(totalprice, { code: "USD" })}
                      </div>
                    </div>
                    <button type="button" className="checkout">
                      Checkout
                    </button>
                    --
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Your cart is empty!"
        )}
      </div>
    </div>
  );
};

export default Cart;
