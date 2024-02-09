const initialState = {
  cart: [],
};
export default function ChangeTheNumber(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("reducer", ...state);
      return [...state, { cart: action.data }];
    case "REMOVE_FROM_CART":
      console.log("-", ...state);
      return state.filter((i) => i.cart.id !== action.data);
    default:
      return state;
  }
}
