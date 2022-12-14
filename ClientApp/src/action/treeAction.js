import { getTree, setError } from "../reducer/treeReducer";
export function getTrees() {
  return (dispatch) => {
    fetch(`/api/tree`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res
        .json()
        .then((data) => {
          if (res.status == 200) {
            dispatch(getTree(data));
          } else {
            dispatch(setError(data));
          }
        })
        .catch((e) => {
          dispatch(
            setError({
              error: e.name,
              message: e.message,
            })
          );
        });
    });
  };
}
