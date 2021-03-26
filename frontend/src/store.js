import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { cartReducer } from "./reducers/cartReducers";
import { productDetailsReducer, productListReducer  } from "./reducers/productReducers";
import { userDetailsReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer } from "./reducers/userReducers";




const initialState = {
              userSignin:{
                            userInfo: localStorage.getItem('userInfo')
                            ? JSON.parse( localStorage.getItem('userInfo'))
                            : null,
              },



              cart:{
                            cartItems: localStorage.getItem('cartItems')
                            ? JSON.parse( localStorage.getItem('cartItems'))
                            : [],
                            ShippingAddress : localStorage.getItem('ShippingAddress')
                            ? JSON.parse( localStorage.getItem('ShippingAddress'))
                            : {}, 
                            paymentMethod: 'PayPal',


              }
} ; 


const reducer = combineReducers({

              
              productList: productListReducer,
              productDetails:productDetailsReducer,
              cart:cartReducer,
              userSignin: userSigninReducer,
              userRegister: userRegisterReducer,
              userDetails: userDetailsReducer,
              updateUserPofile : userUpdateProfileReducer, 


});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (reducer ,initialState, composeEnhancer( applyMiddleware(thunk) ));


export default store ;
