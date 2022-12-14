import { getOrder } from "../kReducer/OrderReducer";
//import { setList, setLoginError } from "../kReducer/OrderReducer";
// export const getLists = () => {
//   return {
//     url: "/api/order",
//     method: "GET",
//     actions: {
//       success: actions.getList,
//     },
//   };
// };
export const getLists = () => {
  return (dispatch) => {
    fetch(`/api/order`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res.json().then((data) => {
        if (res.status == 200) {
          dispatch(getOrder(data));
        } else {
        }
      });
    });
  };
};

// export const removeOrder = (id) => {
//   return {
//     url: `/api/order/${id}`,
//     method: "DELETE",
//     actions: {
//       success: actions.removeOrder,
//     },
//   };
// };

// export const updateOrder = (id, body) => {
//   console.log("action data", id, body);
//   return {
//     url: `/api/order/${id}`,
//     method: "PUT",
//     params: body,
//     actions: {
//       success: actions.updateOrder,
//     },
//   };
// };
