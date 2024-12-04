import axios from "axios";
import { GET_PRODUCTS, POST_PRODUCTS, UPDATE_PRODUCTS } from "./ActionType";

const baseUrl = `http://localhost:3000/products`;
export const fetchProducts = () => async (dispatch) => {
  let res = await axios.get(baseUrl);
  console.log(res.data);
  dispatch(getProduct(res.data));
};

export const postProducts = (payload) => async (dispatch) => {
  let res = await axios.post(baseUrl, payload);
  console.log(res.data);
  dispatch(createProduct(res.data));
};

export const patchProduct = (id, payload) => async (dispatch) => {
  let res = await axios.patch(`${baseUrl}/${id}`, payload);
  dispatch(updateProduct(res.data));
};

const getProduct = (payload) => {
  return {
    type: GET_PRODUCTS,
    payload: payload,
  };
};

const createProduct = (payload) => {
  return { type: POST_PRODUCTS, payload: payload };
};

const updateProduct = (payload) => {
  return {
    type: UPDATE_PRODUCTS,
    payload: payload,
  };
};
