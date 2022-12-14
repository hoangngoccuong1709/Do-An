import * as actionType from "./types";

export const addToCart = (Writedetails) => {
  alert("Đã thêm vào giỏ hàng");
  console.log("dâda", Writedetails);
  return {
    type: actionType.ADD_TO_CART,
    payload: Writedetails,
  };
};
console.log("dada", addToCart.prototype);
export const INCREASE_QUANTITY = (Writedetails) => {
  return {
    type: actionType.INCREASE_QUANTITY,
    payload: Writedetails,
  };
};
export const DECREASE_QUANTITY = (Writedetails) => {
  return {
    type: actionType.DECREASE_QUANTITY,
    payload: Writedetails,
  };
};
export const deleteProduct = (Writedetails) => {
  return {
    type: actionType.REMOVE_FORM_CART,
    payload: Writedetails,
  };
};
