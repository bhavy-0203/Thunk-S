import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, patchProduct, postProducts } from "./redux/Action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { products } = useSelector((store) => store);
  console.log(products);

  const handleSubmit = () => {
    dispatch(
      postProducts({
        title: "Product",
        price: Math.round(Math.random() * 100),
      })
    );
  };

  const handleUpdate = (id) => {
    dispatch(patchProduct(id, { title: "update" }));
  };
  return (
    <div>
      <button onClick={handleSubmit}>create</button>
      <button onClick={() => handleUpdate("5b23")}>update</button>
    </div>
  );
};

export default App;
