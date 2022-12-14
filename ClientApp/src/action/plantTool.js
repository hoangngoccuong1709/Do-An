import { getTool, setError } from "../reducer/plantToolReducer";
export function getTools() {
  return (dispatch) => {
    fetch(`/api/plantingtool`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res
        .json()
        .then((data) => {
          if (res.status == 200) {
            dispatch(getTool(data));
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
