import { actions } from "../kReducer/ConfigSmtp";

export const getListSMTP = () => {
  return {
    url: "/api/ConfigSMTP",
    method: "GET",
    actions: {
      success: actions.setList,
    },
  };
};

export const addNewSmtp = (body) => {
  return {
    url: "/api/ConfigSMTP",
    method: "POST",
    params: body,
    actions: {
      success: actions.addNew,
    },
  };
};

export const removeSmtp = (id) => {
  return {
    url: `/api/ConfigSMTP/${id}`,
    method: "DELETE",
    actions: {
      success: actions.removeSub,
    },
  };
};

export const updateConfig = (id, body) => {
  return {
    url: `/api/ConfigSMTP/${id}`,
    method: "PUT",
    params: body,
    actions: {
      success: actions.updateConfig,
    },
  };
};
