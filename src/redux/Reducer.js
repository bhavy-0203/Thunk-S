import { GET_PRODUCTS, POST_PRODUCTS, UPDATE_PRODUCTS } from "./ActionType";

const intialState = {
  products: [],
};

export const Reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case POST_PRODUCTS:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: state.products.map((ele) =>
          ele.id == payload.id ? payload : ele
        ),
      };
    default:
      return state;
  }
};
