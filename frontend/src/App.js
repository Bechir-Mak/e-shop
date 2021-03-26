import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import Login from './pages/Login';
import PaymentMethod from './pages/PaymentMethod';
import PlaceOrder from './pages/PlaceOrder';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ShippingAddress from './pages/ShippingAddress';


function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems}=cart ;
  
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
   dispatch(signout());
}

  return (
    <BrowserRouter> 
    <div className="App">
       <div className="grid-container">
            <header className="row">
              <div>
                  <Link className="brand" to="/">E-shop</Link>
                         
              </div>
              <div>
                  <Link to="/cart">Shop
                  {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>

                  )}
                  </Link>
                  {
                    userInfo ? (
                      <div className="dropdown">
                      <Link to="#" >{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                     
                      <ul className="dropdown-content">
                          <li>
                          <Link to="/profile">Profile</Link>
                          </li>

                          <li>
                          <Link to="/signout" onClick={signoutHandler}>Logout </Link>
                          </li>
                     
                      </ul>
                      </div>
                    ) :
                    (
                      <Link to="/signin">Login</Link> 
                    )
                 }
                          
              </div>
            </header>
            
            <main>
            <Route path="/cart/:id?" component={CartPage}></Route>
            <Route path="/product/:id" component={ProductDetail}></Route>
            <Route path="/signin" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/shipping" component={ShippingAddress}></Route>
            <Route path="/payment" component={PaymentMethod}></Route>
            <Route path="/placeorder" component={PlaceOrder}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/" component={Home} exact></Route>
                         
            </main>   
             <footer className="row center ">
               All right reserved
             </footer>      
       </div>    
    </div>
    </BrowserRouter>
  );
}
export default App;
