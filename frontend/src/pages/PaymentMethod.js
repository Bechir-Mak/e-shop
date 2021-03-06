import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function PaymentMethod(props) {

            
              const [paymentMethod, setPaymentMethod] = useState('PayPal');
              const dispatch = useDispatch();
              const submitHandler = (e) => {
                            e.preventDefault();
                            dispatch(savePaymentMethod(paymentMethod));
                            props.history.push('/placeorder');
                            
              };

              return (      
                            
                            <div>
                                          <CheckoutSteps step1 step2 step3 ></CheckoutSteps>  
                                          <form className="form" onSubmit={submitHandler}>
                                          <div>
                                                        <h1>Payment</h1>
                                          </div>
                                          <div>
                                                        <div>
                                                                      <input type="radio" id="paypal" value="PayPal" name="paymentMethod" required checked 
                                                                      onChange={(e) => setPaymentMethod(e.target.value)}></input>
                                                                      <label htmlFor="paypal">PayPal</label>
                                                        </div>
                                          </div>

                                          <div>
                                                        <div>
                                                                      <input type="radio" id="stripe" value="Stripe" name="paymentMethod" required 
                                                                      onChange={(e) => setPaymentMethod(e.target.value)}></input>
                                                                      <label htmlFor="stripe">Stripe</label>
                                                        </div>
                                                        <div>
                                                                      <button type="submit" className="primary"> Continue</button>
                                                        </div>
                                          </div>


                                          </form>           
                            </div>
              )
}
