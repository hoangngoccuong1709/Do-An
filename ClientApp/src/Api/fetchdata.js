import { product_tree, fetchProductsError } from "../action/treeaction";

function fetchTrees() {
  return (dispatch) => {
    // dispatch(fetchTreesPending());
    fetch("api/tree")
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(product_tree(res.trees));
        return res.trees;
      });
    console.log("avc", res).catch((error) => {
      dispatch(fetchProductsError(error));
    });
  };
}

export default fetchProducts;
