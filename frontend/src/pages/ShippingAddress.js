import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function ShippingAddress(props) {
              
              const userSignin = useSelector((state) => state.userSignin);
              const {userInfo} = userSignin;
              const cart = useSelector((state) => state.cart );
              const {ShippingAddress} = cart ;
              if (!userInfo) {
                            props.history.push('/signin'); 
              }

              const [fullName, setFullName] = useState(ShippingAddress.fullName);
              const [address, setAddress] = useState(ShippingAddress.address);
              const [city, setCity] = useState(ShippingAddress.city);
              const [postalCode, setPostalCode] = useState(ShippingAddress.postalCode);
              const [country, setCountry] = useState(ShippingAddress.country);
              const dispatch = useDispatch();
              
              const submitHandler = (e) => {
                            e.preventDefault();
                            //dispatch save shipping
                            dispatch(saveShippingAddress({fullName,address,city,postalCode,country})
                            );
                            props.history.push('/payment');
              }

              return (
                            <div>
                                       <CheckoutSteps step1 step2 ></CheckoutSteps>   
                                       <form className="form" onSubmit={submitHandler}>
                                          <div>
                                                        <h1>Shipping Address </h1>
                                          </div>
                                          <div>
                                                        <label htmlFor="full-name">Full name</label>
                                                        <input type="text" id="fullName" placeholder="Enter your name" value={fullName} onChange={(e) =>setFullName(e.target.value)} required

                                                        ></input>

                                          </div>
                                          <div>
                                                        <label htmlFor="address">Address</label>
                                                        <input type="text" id="address" placeholder="Enter Address" value={address} onChange={(e) =>setAddress(e.target.value)} required

                                                        ></input>

                                          </div>
                                          <div>
                                                        <label htmlFor="city">City</label>
                                                        <input type="text" id="city" placeholder="Enter your city" value={city} onChange={(e) =>setCity(e.target.value)} required

                                                        ></input>

                                          </div>
                                          <div>
                                                        <label htmlFor="postalCode">Postal Code</label>
                                                        <input type="text" id="postalCode" placeholder="Enter your Postal code" value={postalCode} onChange={(e) =>setPostalCode(e.target.value)} required

                                                        ></input>

                                          </div>
                                          <div>
                                                        <label htmlFor="Country">Country</label>
                                                        <input type="text" id="country" placeholder="Enter your Postal code" value={country} onChange={(e) =>setCountry (e.target.value)} required

                                                        ></input>

                                          <div>
                                                        <label/>
                                                        <button className="primary" type="submit">Continue</button>
                                          </div>
                                          </div>
                                       </form>
                            </div>
              )
}

