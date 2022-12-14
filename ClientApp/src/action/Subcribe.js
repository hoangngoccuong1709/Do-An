import { actions } from "../reducer/Subscribe";
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
