import React from 'react';
import './Cart.css';

const Cart = (props) => {
   const{cart}=props;
   let Total=0;
   for(const product of cart){
       Total=Total+product.price;
   }
   const shipping=15;
   const tax=Total*0.1;
   const GrandTotal=shipping+tax+Total;
    return (
        <div>
                <h3>Order Summary</h3>
              <h5>Iteams Order:{props.cart.length}</h5>
              <h6>Total:{Total}</h6>
              <p>Shipping:{shipping}</p>
              <p>Tax:{tax.toFixed(2)}</p>
              <h4>GrandTotal:{GrandTotal.toFixed(2)}</h4>
              
        </div>
    );
};

export default Cart;