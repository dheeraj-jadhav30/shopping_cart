import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {useState} from 'react-dom' ; 

const Cart = () => {
  // Safely read the cart array from Redux state, falling back to []
  const cart = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);
  useEffect (() => {
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0 ));
  },[cart])

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {
              cart.map((item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>

            <div>
              <div>
                <div>
                  Your Cart
                </div>
                <div>
                  Summary
                </div>
                <p>
                  <span>
                    Total Item : {cart.length}
                  </span>
                </p>
              </div>
              <div>
                <p>Total amount : {totalAmount}</p>
              </div>
              <button>Checkout Now</button>

            </div>



        </div>
      ) : (
        <div>
          <h1>Your cart is empty</h1>
          <Link to="/">
            <button type="button">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
