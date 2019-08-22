import { GET_PRODUCTS, DELETE_PRODUCT, SELECT_ALL_PRODUCTS } from "../actions/types.js";

const initalState = {
  products: [],
  selectAllChecked: false
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case DELETE_PRODUCT:
      console.log("Action = "+action.payload);
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    case SELECT_ALL_PRODUCTS:
      return {
        ...state,
        selectAllChecked: !state.selectAllChecked
      }
    default:
      return state;
  }
}
