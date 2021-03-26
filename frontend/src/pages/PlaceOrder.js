import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps'

export default function PlaceOrder(props) {
             
  const cart = useSelector( (state)  => state.cart);
              const toPrice =   (num) => Number(num.toFixed(2)); //5.123 => "5.12"
              cart.itemsPrice = toPrice(
                cart.cartItems.reduce((a, c)  => a + c.qty * c.price ,0)
                 );

                 cart.ShippingPrice = cart.itemsPrice > 100? toPrice(0): toPrice(10);
                 cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
                 cart.totalPrice = cart.itemsPrice + cart.ShippingPrice + cart.taxPrice ;
           
              if (!cart.paymentMethod) {
                            props.history.push('/payment');
          
              }

              const placeOrderHandler = () => {
                // dispatch place order
              }
              return (
                            <div>
                                          <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
                                          <div className="row top">
                                            <div className="col-2">
                                                 <ul>
                                                               <li>
                                                                             <div className="card card-body">
                                                                             <h2>Shipping</h2>
                                                                             <p>
                                                                                 <strong>Name:</strong> {cart.ShippingAddress.fullName}  <br />
                                                                                 <strong>Address:</strong> {cart.ShippingAddress.address} ,
                                                                                 {cart.ShippingAddress.city}, {cart.ShippingAddress.postalCode},
                                                                                 {cart.ShippingAddress.country} 
                                                                             </p>

                                                                             </div>
                                                               </li>

                                                               <li>
                                                                             <div className="card card-body">
                                                                             <h2>Payment</h2>
                                                                             <p>
                                                                                 <strong>Method:</strong> {cart.paymentMethod}
                                                                                  
                                                                             </p>

                                                                             </div>
                                                               </li>

                                                               <li>
                                                                             <div className="card card-body">
                                                                             <h2>Order Items</h2>
                                                                             
                                                                             <ul>
                                            {
                                                cart.cartItems.map((item) => (
                                                    <li key={item.product}>
                                                       <div className="row">
                                                         <div>
                                                             <img className="small" src={item.image} alt={item.name}></img>
                                                         </div>
                                                        <div className="min-30">
                                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                        </div>
                                                       
                                                        <div>{item.qty} x ${item.price} = ${item.qty * item.price}</div>                              
                                                       
                              
                                                       </div> 
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                                                             </div>
                                                               </li>
                                                 </ul>

                                            </div>
                                            <div className="col-1">

                                            <div className="card card-body">
                                               <ul>
                                                   <li>
                                                     <h2>Order Summary</h2>
                                                   </li>

                                                   <li>
                                                      <div className="row">
                                                         <div>Items</div>
                                                          <div>${cart.itemsPrice.toFixed(2)}</div>

                                                      </div>
                                                   </li>

                                                   <li>
                                                      <div className="row">
                                                         <div>Shipping</div>
                                                          <div>${cart.ShippingPrice}</div>

                                                      </div>
                                                   </li>

                                                   <li>
                                                      <div className="row">
                                                         <div>Tax</div>
                                                          <div>${cart.taxPrice}</div>

                                                      </div>
                                                   </li>

                                                   <li>
                                                      <div className="row">
                                                         <div> <h2>Order Total</h2></div>
                                                          <div>${cart.totalPrice}</div>

                                                      </div>
                                                   </li>
                                                   <li>
                                                     <button type="button" onClick={placeOrderHandler} className="primary block" disabled={cart.cartItems.length === 0}> Place Order</button>
                                                   </li>

                                               </ul>

                                            </div>

                                            </div>

                                          </div>
                            </div>
              )
}
