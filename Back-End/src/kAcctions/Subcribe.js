import { actions } from "../kReducer/Subscribe";

export const getList = () => {
  return {
    url: "/api/subscribe",
    method: "GET",
    actions: {
      success: actions.setList,
    },
  };
};

export const addNewSub = (body) => {
  return {
    url: "/api/subscribe",
    method: "POST",
    params: body,
    actions: {
      success: actions.addNew,
    },
  };
};

export const removeSub = (id) => {
  return {
    url: `/api/subscribe/${id}`,
    method: "DELETE",
    actions: {
      success: actions.removeSub,
    },
  };
};

export const updateSub = (id, body) => {
  console.log("action data", id, body);
  return {
    url: `/api/subscribe/${id}`,
    method: "PUT",
    params: body,
    actions: {
      success: actions.updateSub,
    },
  };
};

export const sendEmailAll = (body) => {
  console.log("sendSub", body);
  return {
    url: "/api/subscribe/emails",
    method: "POST",
    params: body,
    actions: {
      success: actions.addNew,
    },
  };
};
