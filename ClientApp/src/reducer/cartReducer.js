import Cart from "../pages/cart/Cart";
import * as actionTypes from "./types";
import { combineReducers } from "redux";

const INITAL_STATE = {
  cart: [],
  numberCart: 0,
  _products: [],

  //  currentItem:null
};
const cartReducer = (state = INITAL_STATE, action) => {
  // console.log("dda",cartReducer.prototype)
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          nametool: action.payload.nametool,
          imagetool: action.payload.imagetool,
          price: action.payload.price,
        };
        state.cart.push(cart);
      } else {
        let check = false;
        state.cart.map((item, key) => {
          if (item.id == action.payload.id) {
            state.cart[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            nametool: action.payload.nametool,
            imagetool: action.payload.imagetool,
            price: action.payload.price,
          };
          state.cart.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case actionTypes.REMOVE_FORM_CART:
      let quantity_ = state.cart[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        cart: state.cart.filter((item) => {
          return item.id != state.cart[action.payload].id;
        }),
      };

    case actionTypes.INCREASE_QUANTITY:
      state.numberCart++;
      state.cart[action.payload].quantity++;

      return {
        ...state,
        // cart:[...state.cart,quantity++]
      };
    case actionTypes.DECREASE_QUANTITY:
      let quantity = state.cart[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.cart[action.payload].quantity--;
      }

      return {
        ...state,
      };

    // case actionTypes.REMOVE_FORM_CART:
    //   let newcart = state.cart;
    //   const objIndex = newcart.findIndex((obj) => obj.id == action.payload.id);
    //   newcart.splice(objIndex, 1);
    //   console.log(">>newcart", newcart);
    //   return { cart: [...newcart], totalprice: 0 };
    // case actionTypes.INCREASE_QUANTITY:
    //   state.numberCart++
    //   state.cart[action.payload].quantity++;
    //  return{
    //      ...state
    default:
      return state;
  }
};
const CartReducer = combineReducers({
  cart: cartReducer,
});
// const CartReducer = combineReducers({
//   _todoProduct:todoProduct
// });

export default cartReducer;
