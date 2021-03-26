import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailUser, updateUserProfile } from '../actions/userActions';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';


export default function Profile() {

              const [name, setName] = useState('');
              const [email, setEmail] = useState('');
              const [password, setPassword] = useState('');
              const [confirmPassword, setConfirmPassword] = useState('');

              const userSignin = useSelector( (state) =>state.userSignin );
              const {userInfo } = userSignin ;
              const userDetails = useSelector((state) => state.userDetails);
              const {loading , error, user} = userDetails;

              const dispatch = useDispatch();
              useEffect ( () => {
                            if (!user) {
                                          dispatch(detailUser(userInfo._id));
                            }else {
                                         setName(user.name);
                                         setEmail(user.email); 
                            }
                           
              }, [dispatch, userInfo._id]); 

              const submitHandler = (e) => {
                            e.preventDefault();
                            // update user
                          if ( password !== confirmPassword ){
                                        alert('Password and Confirm Password Are not Matched');
                          }else {
                                        dispatch (updateUserProfile ({ user: user._id, name, email, password }));
                          }                
              };

              return (
                            <div>
                               <form className="form" onSubmit={submitHandler}>
                                          <div>
                                                        <h1>User Profile</h1>
                                          </div>
                                          {

                                          loading? (
                                          <LoadingBox></LoadingBox>
                                          ) :
                                          error? ( 
                                           <MessageBox variant="danger" >{error}</MessageBox>
                                           ) : (
                                          <>
                                          <div>
                                                        <label htmlFor="name"> Name </label>
                                                        <input id="name"
                                                        type= "text"
                                                        placeholder="Enter your name"
                                                       value={name}
                                                       onChange={(e) => setName(e.target.value)}
                                                        
                                                        ></input>
                                          </div>
                                          <div>
                                                        <label htmlFor="email"> Email </label>
                                                        <input id="email"
                                                        type= "email"
                                                        placeholder="Enter your email"
                                                        value={email}
                                                         onChange={(e) => setEmail(e.target.value)}
                                                        
                                                        ></input>
                                          </div>
                                          <div>
                                                        <label htmlFor="password"> Password </label>
                                                        <input id="password"
                                                        type= "password"
                                                        placeholder="Enter your password"
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        
                                                        
                                                        ></input>
                                          </div>
                                          <div>
                                                        <label htmlFor="confirmPassword"> Confirm password </label>
                                                        <input id="confirmPassword"
                                                        type= "password"
                                                        placeholder="Enter your confirm password"
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                        
                                                        ></input>
                                          </div>
                                          <div>
                                                        <label/>
                                                        <button className="primary" type="submit">
                                                                      Update
                                                        </button>
                                          </div>

                                          </>              
                                           )}
                               </form>
                            </div>
              )
}
